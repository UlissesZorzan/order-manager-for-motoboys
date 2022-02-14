//Listagem de lojas
class ListStore {

    constructor(Repository){
        this.repository = Repository;
    }

    execute(){
        let result = [];

        if(!this.repository){
            throw new Error("Repository Store not found");
        }

        for (const store in this.repository){
            result.push(this.repository[store]);
        }

        return result;
    }
}

module.exports = ListStore;