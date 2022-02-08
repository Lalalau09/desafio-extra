import *as jsonfile from "jsonfile"

class Product {
  id: number;
  name: string;
}

class ProductCollection {
  product: Product[] = [];
  

  async getAll() {
    const promesa = await jsonfile.readFile("./product.json")
    return promesa
  }

  async getById(id: number) {
    const resultado = await this.getAll()
   return  resultado.find ((prod)=>{return prod.id == id})
  
  }
}


export { Product, ProductCollection}