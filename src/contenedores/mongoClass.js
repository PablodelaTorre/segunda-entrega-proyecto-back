import mongoose from "mongoose";
import config from "../config.js"

mongoose.connect(config.mongoDb.URL, config.mongoDb.options)

class MongoClass{
    constructor(collectionName,docSchema){
        this.collection = mongoose.model(collectionName,docSchema)
    }

    async getAll(){
        try {
            const all = await this.collection.find({})
        } catch (error) {
            throw new Error('error: ',error)
        }
    }
}

export default MongoClass