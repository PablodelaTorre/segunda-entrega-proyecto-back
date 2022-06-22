import dotenv from 'dotenv'
dotenv.config()

let productsDao 

    switch (process.env.DB_NAME) {
        case 'mongoDb':
        import('./productos/MongoDBProductos.js').then(({MongoDBProductos})=>{
            productsDao = new MongoDBProductos()
        })            
        break
        default:
            console.log('Esta en default')
            break;
    }

export {productsDao}
