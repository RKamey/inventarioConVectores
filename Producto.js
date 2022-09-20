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