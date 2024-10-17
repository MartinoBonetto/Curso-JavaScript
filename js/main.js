// PRODUCTOS
let productos = [];

fetch("./js/producto.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonescategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let numeroCarrito = document.querySelector("#numero");




function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="">
            <div class="productos-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}


botonescategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonescategorias.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    });
});


function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarCarrito);
    });
}


let arrayProductosCarrito;
let arrayProductosCarritoLS = localStorage.getItem("productos-carrito");


if (arrayProductosCarritoLS){
    arrayProductosCarrito = JSON.parse(arrayProductosCarritoLS);
    actualizarNumeroCarrito();
}else{
    arrayProductosCarrito = [];
}


function agregarCarrito(e){

    Toastify({
        text: "Producto agregado al carrito",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #15297c, #142157)",
        },
        offset: {
            x: '1rem',
            y: '1.5rem',
        },
        onClick: function(){}
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productosAgregados = productos.find(producto => producto.id === idBoton);

    if (arrayProductosCarrito.some(producto => producto.id === idBoton)){
        const index = arrayProductosCarrito.findIndex(productos => productos.id === idBoton);
        arrayProductosCarrito[index].cantidad++;
    }else{
        productosAgregados.cantidad = 1;
        arrayProductosCarrito.push(productosAgregados);
    }

    actualizarNumeroCarrito();

    localStorage.setItem("productos-carrito", JSON.stringify(arrayProductosCarrito));
}

function actualizarNumeroCarrito(){
    let numeroNuevo = arrayProductosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numeroCarrito.innerText = numeroNuevo;
}


