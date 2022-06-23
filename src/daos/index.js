import dotenv from 'dotenv'
dotenv.config()

let productsDao 

    switch (process.env.DB_NAME) {
        case 'mongoDb':
        import('./productos/MongoDBProductos.js').then(({MongoDBProductos})=>{
            productsDao = new MongoDBProductos()
        })            
        break

        case 'mongoDbCarrito':
            import('./carritos/MongoDBCarritos.js').then(({MongoDBCarritos})=>{
                carritosDao = new MongoDBCarritos()
            })
        default:
            console.log('Esta en default')
            break;
    }

export {productsDao}
