//Realiza distribuição dos pedidos das lojas para
//os motoboys disponíveis

class DistributeOrdersToMotoboys {

    constructor(storeUseCase, motoboyUseCases){
        this.storeUseCase = storeUseCase;
        this.motoboyUseCases = motoboyUseCases;
    }

    execute(){
        let stores = this.storeUseCase.listStore.execute();
        let motoboys = this.motoboyUseCases.listMotoboy.execute();

        //percorre todas as lojas uma a uma, distribuindo os pedidos para os motoboys disponíveis para a mesma
        stores.forEach((store) => {
            let motoboysAvailables = this.motoboyUseCases.listMotoboyAvailableForStore.execute(store.id);

            motoboysAvailables.forEach((motoboyAvailable, index) => {
                if(store.orders[index]){
                    const profit = this.calculateProfits(store.orders[index], store.commission, motoboyAvailable.flatRate);

                    motoboys.forEach((motoboy) => {
                        if(motoboyAvailable.id == motoboy.id){
                            motoboy.orders.push({storeId: store.id, price: store.orders[index], profit: profit});
                            motoboy.profits += profit;
                        }   
                    })
                    
                }            
               
            });           

        })   

        return motoboys;
    }

    calculateProfits(orderPrice, commission, flatRate){
        let profit = 0;
        profit = flatRate + (orderPrice * commission);        
        return profit;
    }
}

module.exports = DistributeOrdersToMotoboys;