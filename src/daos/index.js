import dotenv from 'dotenv'
dotenv.config()

export let produtcsDao = async function(){
    switch (process.env.DB_NAME) {
        case 'mongoDb':
        const {MongoDBProductos} = await import('./productos/MongoDBProductos')    
        return new MongoDBProductos()
    
        case 'mariaDB':
            break;
    
        default:
            break;
    }
}
