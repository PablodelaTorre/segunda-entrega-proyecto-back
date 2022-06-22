import { Router } from "express"
import {productsDao as api} from "../daos/index.js"

const router = new Router()

router.get('/',async (req,res)=>{
    try {
        const allProducts = await api.getAll()
        res.json(allProducts)
    } catch (error) {
        console.log(error)
    }
})


router.post('/',async (req,res)=>{
    try {
        const createProduct = await api.create(req.body)
        res.json(createProduct)
    } catch (error) {
        console.log(error)
    }
})

export default router