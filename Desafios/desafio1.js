class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, stock, code) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Error: Todos los campos son requeridos");
        return;
      }
  
      if (this.products.some((product) => product.code === code)) {
        console.log("Error producto con el mismo codigo ya existe");
        return;
      }
  
      let id_producto = this.getProducts().length;
      console.log(id_producto);
      let producto = {
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        code: code,
        id: ++id_producto,
        stock: stock,
      };
  
      this.products.push(producto);
      return this.products;
    }
  
    getProductById(id_prod) {
      let product = this.products.find((prod) => prod.id === id_prod);
      console.log("clg product " + product);
      if (product) {
        return console.log(product);
      } else {
        return console.log("Product not found");
      }
    }
  }
  
  const productos = new ProductManager();
  productos.addProduct("Nike Air Force 1", "Mayor comodidad", 50000, "N",200, 1019, 200);
  productos.addProduct("Nike Jordan", "Muestra tu estilo", 42000, "N",200, 1011, 200);
  
  productos.getProductById(1);
