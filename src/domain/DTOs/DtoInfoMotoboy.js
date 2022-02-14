class DtoInfoMotoboy {

    constructor(motoboy){
        this.name = motoboy.name;
        this.store = motoboy.storeId;
        this.profits = motoboy.profits;
        this.orders = motoboy.orders;
    }

    execute(){
        return {
            Nome: this.name,
            Loja: this.store ? this.store : "Sem exclusividade",
            Ganhos: `R$ ${this.profits}`,
            Pedidos_coletados: this.orders ? this.orders : [],
            Total_pedidos_coletados: this.orders ? this.orders.length : 0
        }
    }
}

module.exports = DtoInfoMotoboy;