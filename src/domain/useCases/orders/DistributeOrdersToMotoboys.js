class DistributeOrdersToMotoboys {

    constructor(storeUseCase, motoboyUseCases){
        this.storeUseCase = storeUseCase;
        this.motoboyUseCases = motoboyUseCases;
    }

    execute(){
        let result = [];

        let stores = this.storeUseCase.listStore.execute();
        let motoboys = this.motoboyUseCases.listMotoboy.execute();

        //percorre todas as lojas uma a uma, distribuindo os pedidos para os motoboys
        for( const store in stores ){
            let motoboysAvailables = this.motoboyUseCases.listMotoboyAvailableForStore.execute(stores[store].id);

            let newMotoboysAvailables = [];

            motoboysAvailables.forEach((motoboy, index) => {

                if(stores[store].orders[index]){
                    const profit = this.calculateProfits(stores[store].orders[index], stores[store].commission, motoboy.flatRate);

                    motoboy['orders'] = [];
                    motoboy['orders'].push({price: stores[store].orders[index], profit: profit});
                }
                
                return newMotoboysAvailables.push(motoboy);
            });

            //faltando juntar os motoboys com pedidos com perfil global do motoboy

        }

        return result;
    }

    calculateProfits(orderPrice, commission, flatRate){
        let profit = 0;
        profit = flatRate + (orderPrice * commission);        
        return profit;
    }
}

module.exports = DistributeOrdersToMotoboys;