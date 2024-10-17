let arrayProductosCarrito = localStorage.getItem("productos-carrito");
arrayProductosCarrito = JSON.parse(arrayProductosCarrito);

const carritoVacio = document.querySelector("#carritoVacio");
const carritoProductos = document.querySelector("#carritoProductos");
const carritoAcciones = document.querySelector("#carritoAcciones");
const carritoComprado = document.querySelector("#carritoComprado");
const botonComprar = document.querySelector("#botonComprar");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const carritoVaciar = document.querySelector("#carrito-acciones-vaciar");
const total = document.querySelector("#total");




function cargarProductosCarrito() {

    if (arrayProductosCarrito && arrayProductosCarrito.length > 0) {

        carritoVacio.classList.add("disabled");
        carritoProductos.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");

        carritoProductos.innerHTML = "";

        arrayProductosCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
    
                <img class="img-producto" src="${producto.imagen}" alt="${producto.titulo}">
    
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito-prtducto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            carritoProductos.append(div);

        });

    } else {

        carritoVacio.classList.remove("disabled");
        carritoProductos.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");

    }

    actualizarBotonesEliminar();
    actualizarTotal();
}




function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) {
    
    const idBoton = e.currentTarget.id;
    const index = arrayProductosCarrito.findIndex(producto => producto.id === idBoton);

    arrayProductosCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-carrito", JSON.stringify(arrayProductosCarrito));

}


carritoVaciar.addEventListener('click', vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: "Estas seguro?",
        text: "Se eliminaran todos los productos agregados al carrito!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Productos eliminados!",
                text: "Tus productos ya no se encuentran en el carrito.",
                icon: "success"
            });
            arrayProductosCarrito.length = 0;
            localStorage.setItem("productos-carrito", JSON.stringify(arrayProductosCarrito));
            cargarProductosCarrito();
        }
    });


}

function actualizarTotal() {
    const totalCalculado = arrayProductosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `${totalCalculado}`;
}

botonComprar.addEventListener('click', carritoFueComprado);
function carritoFueComprado() {

    Swal.fire({
        title: "Confirmacion de compra?",
        text: "Desea realizar la compra de los productos en carrito!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, comprar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra exitosa!",
                text: "Tus productos fueron comprados con exito",
                icon: "success"
            });
            arrayProductosCarrito.length = 0;
            localStorage.setItem("productos-carrito", JSON.stringify(arrayProductosCarrito));

            carritoVacio.classList.add("disabled");
            carritoProductos.classList.add("disabled");
            carritoAcciones.classList.add("disabled");
            carritoComprado.classList.remove("disabled");
        }
    });
}

// INICIO DEL PROGRAMA
cargarProductosCarrito();