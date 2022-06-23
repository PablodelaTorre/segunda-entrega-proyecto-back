import { Router } from "express"
import {carritosDao as api} from "../daos/index.js"
import {productsDao as apiP} from "../daos/index.js"


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

router.post('/',async (req,res)=>{
    try {
        const createCarrito = await api.create(req.body)
        res.json(createCarrito)
    } catch (error) {
        console.log(error)
    }
})

router.post('/:id/productos/:id_prod',async (req,res)=>{
    try {
        const {id} = req.params
        const {id_prod} = req.params
        const product = await apiP.findById(id_prod)
        const createCarritoProd = await api.createCarritoProds(id,product)
        res.json(createCarritoProd)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async(req,res)=>{
    const {id} = req.params
    const deleteProduct = await api.deleteById(id)
    res.json(deleteProduct)
})

outer.delete('/:id/productos/:id_prod',async (req,res)=>{
    try {
        const {id} = req.params
        const {id_prod} = req.params
        const product = await apiP.findById(id_prod)
        const deleteProd = await api.deleteP(id,product)
        res.json(deleteProd)
    } catch (error) {
        console.log(error)
    }
})

export default router