class ListMotoboyAvailableForStore {
    // Retorna todos os motoboys disponíveis para a loja,
    // dando preferência para os que possuem exclusividade

    constructor(Repository){
        this.repository = Repository;
    }

    execute(storeId){
        let result = [];

        if(!this.repository){
            throw new Error("Repository Motoboy not found");
        }

        for (const motoboy in this.repository){
            if(this.repository[motoboy].storeId == storeId){
                result.unshift(this.repository[motoboy]);
            }
            else if(this.repository[motoboy].storeId == null){
                result.push(this.repository[motoboy]); 
            }
            
        }

        return result;
    }

}

module.exports = ListMotoboyAvailableForStore;