import mongoose from "mongoose";
import config from "../config.js"

mongoose.connect(config.mongoDb.URL, config.mongoDb.options)

class MongoClassCarrito {
    constructor(collectionName,docSchema){
        this.collection = mongoose.model(collectionName,docSchema)
    }

    async findAll(){
        try {
            const carritos = await this.collection.find({})
            return carritos
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findById(id){
        try {
            const carrito = await this.collection.findOne({_id:id})
            return carrito
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async create(){
        try {
            const carrito = await this.collection.create()
            return carrito
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async createCarritoProds(id,prod){
        try {
            const carrito = await this.collection.findById(id)
            const nuevoCarrito = await carrito.productos.create(prod)
            return nuevoCarrito
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async deleteById(id){
        try {
            const deleteCarrito = await this.collection.deleteOne({_id:id})
            return deleteCarrito
        } catch (error) {
            throw new Error('error: ',error)
        }
    }

    async deleteP(id,id_prod){
        try {
            const carrito = await this.findById(id)
            const prodCarrDel = await carrito.productos.deleteOne({_id:id_prod})
            return prodCarrDel
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }    
    }

}

export default MongoClassCarrito