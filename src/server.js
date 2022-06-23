import express from 'express'
import productsRoutes from './routes/productsRoutes.js'
import carritosRoutes from './routes/carritosRoutes.js'

const app = express()

app.use(express.json())
app.use("/api/products",productsRoutes)
app.use("/api/carritos",carritosRoutes)



const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})