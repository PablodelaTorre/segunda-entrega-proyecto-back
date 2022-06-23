import MongoClassCarrito from "../../contenedores/mongoClassCarrito.js";

export class MongoDBCarritos extends MongoClassCarrito{
    constructor(){
        super('carritos',{
            productos:{type:Array}
        })
    }
}