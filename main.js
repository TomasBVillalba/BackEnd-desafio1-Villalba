class ProductManager {
    constructor(){
        this.products = []
}

static id = 0

addProduct(title,description,price,thumbnail,code,stock) {
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].code === code) {
            console.log(`el codigo ${code} esta repetido`)
            break;
        }
    }

    const newProduct = {title,description,price,thumbnail,code,stock}

    if(!Object.values(newProduct).includes(undefined)) {
        ProductManager.id++
        this.products.push({...newProduct, id:ProductManager.id})
    }else {
        console.log("todos los campos son requeridos")
    }

}

getProduct(){
    return this.products;
}

existe (id){
    return this.products.find((producto)=> producto.id === id)
}

getProductById(id) {
    if(!this.existe(id)){
        console.log("not found")
    }else{
        console.log(this.existe(id))
    }
}

}

const productos = new ProductManager();
// primer llamado = arreglo vacio
console.log(productos.getProduct());

// agregamos producto
productos.addProduct('title1','description1',1000,'thumbnail1','abc123',3)
productos.addProduct('title2','description2',3000,'thumbnail2','abc124',13)

// segundo llamado = arreglo con producto
console.log(productos.getProduct());

// validamos que el codigo no este repetido
productos.addProduct('title3','description3',13000,'thumbnail3','abc123',33)

// busqueda de producto por ID
productos.getProductById(2);   

// busqueda de producto por ID no existente 
productos.getProductById(4); 