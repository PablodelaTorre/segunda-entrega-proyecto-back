import knex from "knex"

export default class Api {
    constructor(options,table){
        this.knex = knex(options)
        this.table = table
    }
    async findAll(){
        try {
            const productos = await this.knex.from(this.table).select("*")
            return productos
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findById(id){
        try {
            const producto = await this.knex.from(this.table).select("*").where('id',id)
            return producto
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async create(obj){
        try {
            const nuevoProducto = await this.knex(this.table).insert(obj)
            return nuevoProducto
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async deleteP(id){
        try {
            const elementoBorrado = await this.knex.from(this.table).where("id",id).del()
            return elementoBorrado
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }   
    }

    async deleteAll(id){
        try {
            return await this.knex.from(this.table).del()
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }   
    }
}