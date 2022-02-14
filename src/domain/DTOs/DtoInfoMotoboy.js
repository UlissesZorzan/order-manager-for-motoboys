class DtoInfoMotoboy {

    constructor(motoboy){
        this.name = motoboy.name;
        this.store = motoboy.storeId;
        this.earnings = motoboy.earnings;
    }

    execute(){
        return {
            "Nome": this.name,
            "Loja": this.store ? this.store : "Sem exclusividade",
            "Ganhos": `R$ ${this.earnings}`
        }
    }
}

module.exports = { DtoInfoMotoboy };