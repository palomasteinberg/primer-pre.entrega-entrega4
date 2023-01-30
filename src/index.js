const ProducManager = require("./ProductManager")
const manager = new ProducManager("products.json")

const product1 = {
    title: "Cartuchera Estampada",
    description: "Estampa rosa con corazones rojos",
    price: 1700,
    thumbnail: 'http://',
    code: "C019006",
    stock: 5,
}
const product2 = {
    title: "Cartuchera Estampada",
    description: "Estampa negra lisa",
    price: 1450,
    thumbnail: 'http://',
    code: "C012005",
    stock: 2,
}
const productRemplazo = {
    title: "Cartuchera Estampada",
    description: "Estampa animal print",
    price: 1200,
    thumbnail: 'http://',
    code: "C012001",
    stock: 10,
}
const run = async () => {
    try {
    const products = new ProductManager("./entregables/products.json")
    await products.addProduct(product1)
    await products.addProduct(product2)
    console.log("primera consulta", await products.getProducts())
    console.log("byId", await products.getById(2))
    await products.updateProduct(2, productRemplazo)
    console.log("segunda consulta", await products.getProducts())
    console.log("byId", await products.getById(2))
    }
    catch{
        console.log("Not Found")
    }
}
run()