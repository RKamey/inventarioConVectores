let formAgregar = document.querySelector('#form-agregar');
let btnAgregar = document.querySelector('#btn-agregar');

let arrayProductos = [];


const CrearProducto = (codigo, nombre, cantidad, precio) => {
    
    let producto = {
        codigo: codigo,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    }

    arrayProductos.push(producto);

    return producto;
}

formAgregar.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let codigoP = document.querySelector('#codigo-p').value;
    let nombreP = document.querySelector('#nombre-p').value;
    let cantidadP = document.querySelector('#cantidad-p').value;
    let precioP = document.querySelector('#precio-p').value;

    if (codigoP === '' || nombreP === '' || cantidadP === '' || precioP === '') {
        alert ('Por favor llene todos los campos')
        formAgregar.reset();
        return;
    }

    CrearProducto(codigoP, nombreP, cantidadP, precioP);
    formAgregar.reset();
})

console.log(arrayProductos);

btnAgregar.addEventListener('submit', () => {
    let tablaProductos = document.querySelector('#tabla-productos').insertRow(0);
    let codigo = tablaProductos.insertCell(0);
    let nombre = tablaProductos.insertCell(1);
    let cantidad = tablaProductos.insertCell(2);
    let precio = tablaProductos.insertCell(3);

    codigo.innerHTML = 'codigo';
    nombre.innerHTML = 'nombre';
    cantidad.innerHTML = 'cantidad';
    precio.innerHTML = 'precio';
});