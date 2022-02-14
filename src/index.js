const readline = require('readline');
const motoboyUseCases = require('./domain/useCases/motoboy');
const storeUseCase = require('./domain/useCases/store');
const DistributeOrdersToMotoboys = require('./domain/useCases/orders/DistributeOrdersToMotoboys');
const DtoInfoMotoboy = require('./domain/DTOs/DtoInfoMotoboy');

//criação de interface para interação com usuário
let interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicita interação do usuário e retorna o dado inserido
async function ask() {
    return new Promise((resolve, reject) => {
        try {
            interface.question('Enter input: ', (input) => resolve(input) );
        } catch (error) {
            reject("");
        }        
    });
}

//realiza exibição das informações do motoboy
function showInfoMotoboy(motoboys, motoboyId){
    if(motoboyId){
        const motoboy = motoboys.filter((motoboy) => {
            if(motoboy.id == motoboyId){
                return motoboy
            }            
        })

        const dtoInfoMotoboy = new DtoInfoMotoboy(motoboy[0]).execute();
        console.dir(dtoInfoMotoboy, { depth: null });
    }
    else{
        motoboys.forEach(motoboy => {
            const dtoInfoMotoboy = new DtoInfoMotoboy(motoboy).execute();
            console.dir(dtoInfoMotoboy, { depth: null });
        });
    }    
}

//execução principal
async function main(){
    try {        
        let motoboyId;
        motoboyId = await ask();   
        
        const motoboysWithOrders = new DistributeOrdersToMotoboys(storeUseCase, motoboyUseCases).execute();        

        //validação se o usuário solicitado existe
        if(motoboyId != ""){
            const motoboy = motoboyUseCases.findMotoboy.execute(motoboyId);
            if(!motoboy.id){
                throw new Error("Motoboy not found");
            }
        }        

        showInfoMotoboy(motoboysWithOrders, motoboyId);        

    } catch (error) {
        console.log('Error', error.message)
    }    
    
    process.exit();
}



main();