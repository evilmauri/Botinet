let cajas = document.getElementById("cajas");
let seleccion = document.getElementById("seleccion");
let imgSeleccion = document.getElementById("img");
let eleccionSeleccionada = document.getElementById("eleccion");
let descripSeleccion = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

//////////////2compra
let cajas2 = document.getElementById("cajas2");
let seleccion2 = document.getElementById("seleccion2");
let imgSeleccion2 = document.getElementById("img2");
let eleccionSeleccionada2 = document.getElementById("eleccion2");
let descripSeleccion2 = document.getElementById("descripcion2");
let precioSeleccionado2 = document.getElementById("precio2");



//Funcion con la informacion seleccionada
function cargar(item){
    quitarBordes();
    cajas.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid none";

    imgSeleccion.src = item.getElementsByTagName("img")[0].src;

    eleccionSeleccionada.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccion.innerHTML = "Descripcion";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}
function cargar2(item2){
    quitarBordes2();
    cajas2.style.width = "60%";
    seleccion2.style.width = "40%";
    seleccion2.style.opacity = "1";
    item2.style.border = "2px solid none";

    imgSeleccion2.src = item2.getElementsByTagName("img")[0].src;

    eleccionSeleccionada2.innerHTML = item2.getElementsByTagName("p")[0].innerHTML;

    descripSeleccion2.innerHTML = "Descripcion";

    precioSeleccionado2.innerHTML = item2.getElementsByTagName("span")[0].innerHTML;

}

//Crear el array
    let Productos = [];
//funcion para guardar los productos seleccionador
  function GuardarDatos() {
    //crear las const
    const nombre = document.getElementById("eleccion").textContent;
    const precioTexto = document.getElementById("precio").textContent;
    const cantidad = parseInt(document.getElementById("CantidadProducto").value);


    // Validar cantidad
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

    const precio = parseInt(precioTexto.replace(/\D/g, ''));//Quita símbolos y convierte a número
    const total = precio * cantidad;

    //Nuevo carrito para agregar los diferentes valores
    const NuevoCarrito = {
      id: Productos.length + 1,
      NombreProducto: nombre,
      CantidadProducto: cantidad,
      Precio: precio,
      TotalProducto: total,
    };
    //cargar los datos mediante push
    Productos.push(NuevoCarrito);
    actualizarCarrito();
  }

  //actualizar carrito con el producto agregado
  function actualizarCarrito() {
    //crear un tbody para agregar los productos a una tabla
    const cuerpoTabla2 = document.getElementById('CuerpoTabla2');
    cuerpoTabla2.innerHTML = '';

    Productos.forEach(producto => {
      const fila = document.createElement('tr');

      fila.innerHTML = `
        <td>${producto.NombreProducto}</td>
        <td>${producto.CantidadProducto}</td>
        <td>$ ${producto.Precio.toFixed(2)}</td>
        <td>$ ${producto.TotalProducto.toFixed(2)}</td>
      `;

      cuerpoTabla2.appendChild(fila);
    });
  }
//funcion para guardar los productos seleccionados
const Productos2 = [];
  function GuardarDatos2() {
    //crear las const
    const nombre2 = document.getElementById("eleccion2").textContent;
    const precioTexto2 = document.getElementById("precio2").textContent;
    const cantidad2 = parseInt(document.getElementById("CantidadProdu2").value);

    // Validar cantidad
  if (isNaN(cantidad2) || cantidad2 <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }

    const precio2 = parseFloat(precioTexto2.replace(/\D/g, ''));//Quita símbolos y convierte a número
    const total2 = precio2 * cantidad2;

    //Nuevo carrito para agregar los diferentes valores
    const NuevoCarrito2 = {
      id: Productos2.length + 1,
      NombreProducto2: nombre2,
      CantidadProdu2: cantidad2,
      Precio2: precio2,
      TotalProducto2: total2
    };
    //cargar los datos mediante push
    Productos2.push(NuevoCarrito2);
    actualizarCarrito2();
  }

  //actualizar carrito con el producto agregado
  function actualizarCarrito2() {
    //crear un tbody para agregar los productos a una tabla
    const cuerpoTabla3 = document.getElementById('CuerpoTabla3');
    cuerpoTabla3.innerHTML = '';

    Productos2.forEach(producto => {
      const fila2 = document.createElement('tr');

      fila2.innerHTML = `
        <td>${producto.NombreProducto2}</td>
        <td>${producto.CantidadProdu2}</td>
        <td>$ ${producto.Precio2.toFixed(2)}</td>
        <td>$ ${producto.TotalProducto2.toFixed(2)}</td>
      `;

      cuerpoTabla3.appendChild(fila2);
    });
  }


//Funcion para quitar bordes al seleccionar el producto
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i < items.length; i++){
        items[i].style.border = "none";
    }
}
function quitarBordes2(){
    var items2 = document.getElementsByClassName("item2");
    for(i=0;i < items2.length; i++){
        items2[i].style.border = "none";
    }
}
//Funcion para cerrar el recuadro seleccionado
function cerrar(){
    cajas.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function cerrar2(){
    cajas2.style.width = "100%";
    seleccion2.style.width = "0";
    seleccion2.style.opacity = "0";
    quitarBordes2();
}

//Funcion del formulario de contacto
function Contacto(){
const form = document.getElementById('RegistroContacto');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Validar los campos
    const name = document.getElementById('nombreContacto').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('msg').value;

    if (name === '' || email === '' || message === '') {
        responseDiv.textContent = 'Por favor, completa todos los campos.';
        responseDiv.style.color = "#fcad03";
        responseDiv.style.textAlign = "center";
        responseDiv.classList.add('error');
        return;
    }

    // Simular el envío del formulario (aquí se podría integrar una llamada a una API)
    setTimeout(() => {
        responseDiv.textContent = 'Formulario enviado con éxito!';
        responseDiv.classList.remove('error');
        form.reset(); // Limpiar el formulario
    }, 1000);
});
}