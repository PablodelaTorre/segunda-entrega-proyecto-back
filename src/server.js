import express from 'express'
import productsRoutes from './routes/productsRoutes.js'

const app = express()

app.use(express.json())
app.use("/api/products",productsRoutes)



const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})