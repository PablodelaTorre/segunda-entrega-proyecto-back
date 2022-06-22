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

router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const product = await api.findById(id)
    res.json(product)
})

router.put('/:id', async(req,res)=>{
    const {id} = req.params
    const newProduct = req.body
    const deleteProduct = await api.actualizarP(id,newProduct)
    res.json(deleteProduct)
})


router.post('/',async (req,res)=>{
    try {
        const createProduct = await api.create(req.body)
        res.json(createProduct)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    const deleteProduct = await api.deleteById(id)
    res.json(deleteProduct)
})

export default router