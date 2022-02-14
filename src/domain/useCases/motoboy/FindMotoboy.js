class FindMotoboy {
    //Retorna o motoboy com o id solicitado

    constructor(Repository){
        this.repository = Repository;
    }

    execute(id){

        if(!this.repository){
            throw new Error("Repository Motoboy not found");
        }
        
        let result = {};
        
        for (const motoboy in this.repository){

            if(this.repository[motoboy].id == id){
                result = this.repository[motoboy];
            }

        }

        return result;
    }

}

module.exports =  FindMotoboy;