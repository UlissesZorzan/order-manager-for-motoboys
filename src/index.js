const readline = require('readline');
const motoboyUseCases = require('./domain/useCases/motoboy');
const storeUseCase = require('./domain/useCases/store');
const DistributeOrdersToMotoboys = require('./domain/useCases/orders/DistributeOrdersToMotoboys');


//criação de interface para o usuário inserir o dado
let interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//solicita interação do usuário e retorna o dado inserido pelo usuario
async function ask() {
    return new Promise((resolve, reject) => {
        try {
            interface.question('Enter input: ', (input) => resolve(input) );
        } catch (error) {
            reject("");
        }        
    });
}

//execução principal
async function main(){
    try {
        
        let idMotoboy = "";
        idMotoboy = await ask();   
        
        const motoboysWithOrders = new DistributeOrdersToMotoboys(storeUseCase, motoboyUseCases).execute();
        

        if(idMotoboy != ""){
            const motoboy = motoboyUseCases.findMotoboy.execute(idMotoboy);

            if(!motoboy.id){
                throw new Error("Motoboy not found")
            }
        }
        else{
            
        }

    } catch (error) {
        console.log(error)
        console.log('Error', error.message)
    }
    

    process.exit();
}





main();