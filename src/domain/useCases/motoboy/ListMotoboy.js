//Listagem de motoboys
class ListMotoboy {

    constructor(Repository){
        this.repository = Repository;
    }

    execute(){
        let result = [];

        if(!this.repository){
            throw new Error("Repository Motoboy not found");
        }

        for (const motoboy in this.repository){
            result.push(this.repository[motoboy]);
        }

        return result;
    }

}

module.exports = ListMotoboy;