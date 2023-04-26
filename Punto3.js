class Carrito{
    montoTotal=0 ;
    productos=[];
    
    constructor(montoTotal, productos){
        this.montoTotal=montoTotal;
    }

    MostarPedido(){
        console.log("Monto Total del carrito: $ "+this.montoTotal);
        console.log("------------------------ ");
        this.recorrerProductos;
    }

    agregarProducto(nombre, precio, unidades){
        if (carrito1.productos.indexOf(nombre)>=0){
            console.log("Ya existe el producto "+nombre+" en el carrito");
        } else{
            let precioF=precio+unidades;
            console.log("Nuevo Producto agregado al carrito: "+nombre+" - Precio: $ "+precio+" - Unidades: "+unidades+" - Importe: $ "+precioF);
            //console.log("Precio: $ "+precio+" Unidades: "+unidades+" Importe: "+precioF);
            this.montoTotal=this.montoTotal+precioF;
            carrito1.productos.push(nombre);
        }
    }

   
    recorrerProductos(){
        let longitud=carrito1.productos.length;
        console.log("Productos del Carrito, cantidad: "+longitud);
        console.log("--------------------------------");
        
        for (let i=0;i<longitud;i++){
            console.log(carrito1.productos[i]);
        }
    }
} 

const carrito1=new Carrito(0);

carrito1.agregarProducto("Azucar",5,2);
carrito1.agregarProducto("Yerba",2,2);
carrito1.agregarProducto("Harina",15,2);
carrito1.agregarProducto("Yerba",2,2);
carrito1.agregarProducto("Dulce",5,1);
carrito1.agregarProducto("Yerba",5,1);
carrito1.agregarProducto("Harina",15,2);
carrito1.agregarProducto("Azucar",15,2);
carrito1.agregarProducto("Dulce",15,2);

console.log(" ");
console.log("Carrito de Compras");
console.log("==================");
carrito1.recorrerProductos();
console.log(" ");
carrito1.MostarPedido();