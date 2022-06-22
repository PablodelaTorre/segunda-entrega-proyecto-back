import MongoClass from "../../contenedores/mongoClass.js";

export class MongoDBProductos extends MongoClass{
    constructor(){
        super('productos',{
            nombre:{type:String,required:true},
            precio:{type:Number,required:true},
            codigo:{type:String,required:true,unique:true},
            descripcion:{type:String,required:true}
        })
    }
}