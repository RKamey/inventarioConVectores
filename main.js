class Producto {
    constructor(codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    getCodigo() {
        return this._codigo;
    }

    getNombre() {
        return this._nombre;
    }

    getCantidad() {
        return this._cantidad;
    }

    getPrecio() {
        return this._precio;
    }

    getInfo() {
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: $${this.precio}`;
    }
}
class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    eliminarProducto(codigo) {
        let producto = this.buscarProducto(codigo);
        if (producto) {
            this.eliminar(codigo);
            alert('Producto eliminado');
        } else {
            alert('Producto no encontrado');
        }

    }

    buscarProducto(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo === codigo) {
                return this.productos[i];
            }
        }
    }

    eliminar(codigo) {
        for (let i = 0; i < this.productos.length - 1 ; i++) {
            if (codigo === this.productos[i].codigo) {
                for (let j = i; j < this.productos.length - 1; j++) {
                    this.productos[j] = this.productos[j + 1];
                }

                this.productos.pop();
            }
            
        }
    }

    listarProductos() {
        let lista = '';
        for (let i = 0; i < this.productos.length; i++) {
            lista += this.productos[i].getInfo() + ' ';
        }

        return lista;
    }

    listarInverso() {
        let listaInv = '';
        for (let i = this.productos.length - 1; i >= 0; i--) {
            listaInv += this.productos[i].getInfo() + ' ';
        }
        
        return listaInv;
    }
}

const inventario = new Inventario();
const historial = document.getElementById('divHistorial');

// Agregar producto

const btnAgregar = document.getElementById('btn-agregar');
btnAgregar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo-p').value;
    let nombre = document.getElementById('nombre-p').value;
    let precio = document.getElementById('precio-p').value;
    let cantidad = document.getElementById('cantidad-p').value;

    //validar
    if (codigo === '' || nombre === '' || precio === '' || cantidad === '') {
        alert('Todos los campos son obligatorios');
    } else {
        //agrega y muestra
        let producto = new Producto(codigo, nombre, cantidad, precio);
        inventario.agregarProducto(producto);
        historial.innerHTML += `<p>Se agrego el producto</p>`;
        document.getElementById('form-agregar').reset();

    }
});
  
// Buscar Producto
const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo-b').value;
    let producto = inventario.buscarProducto(codigo);
    if (producto) {
        document.getElementById('form-buscar').reset();
        historial.innerHTML += producto.getInfo();
    } else {
        alert('Producto no encontrado');
    }
});

// Eliminar Producto
const btnEliminar = document.getElementById('btn-eliminar');
btnEliminar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo-e').value;
    if (codigo === '' || inventario.buscarProducto(codigo) === null) {
        alert('Todos los campos son obligatorios');
    } else {
        inventario.eliminarProducto(codigo);
        document.getElementById('form-eliminar').reset();
        historial.innerHTML += `<p>Se elimino el producto</p>`;
    }
});

// Listar Productos
const btnListar = document.getElementById('btn-listar');
btnListar.addEventListener('click', () => {
    let lista = inventario.listarProductos();
    if (lista) {
        historial.innerHTML += inventario.listarProductos();
    } else {
        alert('No hay productos en el inventario');
    }
});

// Listar Productos invertidos
const btnListarInv = document.getElementById('btn-listar-inv');
btnListarInv.addEventListener('click', () => {
    let listaInv = inventario.listarInverso();
    if (listaInv) {
        historial.innerHTML += inventario.listarInverso();
    } else {
        alert('No hay productos en el inventario');
    }
}); 

