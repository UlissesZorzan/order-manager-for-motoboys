// Listagem de motoboys disponíveis para determinada loja
// ordenando de acordo com o fator de exclusividade
class ListMotoboyAvailableForStore {

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