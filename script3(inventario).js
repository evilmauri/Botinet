// let producto = '{ "Producto" : [' +
// '{ "NombreProducto":"Kunstman" , "CantidadProducto":"1", PrecioProducto: "$3000" , TipoProducto: "Cerveza", },' +
// '{ "NombreProducto":"Kunstman" , "CantidadProducto":"1", PrecioProducto: "$3000" , TipoProducto: "Cerveza", },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// Objeto con guardado
// const Producto = {
//     NombreProducto:  "cristal",
//     CantidadProducto: "2",
//     PrecioProducto: "3000",
//     TipoDeProducto: "Cerveza"
// };


// localStorage.setItem("Producto",JSON.stringify(Producto));
// const ProductoRecuperado = JSON.parse(localStorage.getItem("Producto"));

// const elemento = document.getElementById("elemento");
// const producto = JSON.parse(elemento.getAttribute("data-Producto"));



// const botonrecuperar = document.getElementById("BtnRecuperar");

// botonrecuperar.addEventListener("click",() =>{
//     const objetorecuperado = JSON.parse(localStorage.getItem("Producto"));
//     elemento.textContent = JSON.stringify(objetorecuperado);
// });

let Productos = [];
document.getElementById('productoForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const NombreProducto = document.getElementById("NombreProducto").value;
    const CantidadProducto = document.getElementById("CantidadProducto").value;
    const Precio = document.getElementById("PrecioProducto").value;
    const tipoSeleccionado = document.getElementById("Tipo").value;

    const NuevoProducto = {
        id: Productos.length + 1,
        NombreProducto: NombreProducto,
        CantidadProducto: CantidadProducto,
        Precio: Precio,
        Tipo: tipoSeleccionado
    };

    Productos.push(NuevoProducto)

    actualizarTabla();
    this.reset();
});
function actualizarTabla() {
    const cuerpoTabla = document.getElementById('CuerpoTabla');
    cuerpoTabla.innerHTML = '';

    Productos.forEach(producto => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <th scope="row">${producto.id}</th>
            <td>${producto.NombreProducto}</td>
            <td>${producto.CantidadProducto}</td>
            <td>${producto.Precio}</td>
            <td>${producto.Tipo}</td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}


