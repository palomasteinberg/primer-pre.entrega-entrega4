const fs = require("fs")

class ProducManager{
    products;
    constructor(file){
        this.products = file
    }
    async getNewId(){
        let datos = await this.getProducts()
        if (datos.length == 0){
            return 1
        } else{
          return datos[datos.length - 1].id + 1 
        }
    }
    async addProduct(nuevoProducto){
        nuevoProducto.id = await this.getNewId()
        let datos = await this.getProducts()
        datos.push(nuevoProducto)
        await fs.promises.writeFile(this.products, JSON.stringify(datos))
    }
    async getProduct(){
        try {
            let mostrar = await fs.promises.readFile(this.path,"utf-8")
                return JSON.parse (mostrar);
        } catch (error) {
            console.log(error);
        }
    }
    async getProdctById(id){
        let arr =  await this.getProducts()
        return arr.find(busq => busq.id == id)
        
    }
    async updateProduct(id, product) {
        try {
            const dataParse = await this.getProducts()
            const position = dataParse.findIndex((productId) => productId.id === id)
            console.log(position)
            product.id = id
            dataParse.splice(position, 1, product)
            await fs.promises.writeFile(this.file, JSON.stringify(dataParse, null, 2))
        }
        catch (err) {
            throw new Error(err)
        }
    }
    async deleteProduct(id){
        let arr =  await this.getProducts()
        let pos = arr.findIndex(ele => ele.id === id)
        arr.splice(pos,1)
        await fs.promises.writeFile(this.products, JSON.stringify(arr))
    } 
}

module.exports = ProducManager;
