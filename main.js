// PRODUCTOS
const productos = [
    // PROCESADORES
    {
        id: "procesador-01",
        titulo: "Ryzen 5 3600",
        imagen: "./img/Procesadores/Ryzen5-3600.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 115000,

    },
    {
        id: "procesador-02",
        titulo: "Ryzen 3 3200G",
        imagen: "./img/Procesadores/Ryzen3-3200g.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 73900
    },
    {
        id: "procesador-03",
        titulo: "Ryzen 5 5600X",
        imagen: "./img/Procesadores/Ryzen 5-5600x.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 208000
    },
    {
        id: "procesador-04",
        titulo: "Ryzen 7 5800X",
        imagen: "./img/Procesadores/Ryzen7-5800x.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 304900
    },
    {
        id: "procesador-05",
        titulo: "Intel Core i5 14400F",
        imagen: "./img/Procesadores/i5-14400f.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 224185
    },
    {
        id: "procesador-06",
        titulo: "Intel Core i5 14600K",
        imagen: "./img/Procesadores/i5-14600k.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 344154
    },
    {
        id: "procesador-07",
        titulo: "Intel Core i7 14700K",
        imagen: "./img/Procesadores/i7-14700k.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 510306
    },
    {
        id: "procesador-08",
        titulo: "Intel Core i7 14700KF",
        imagen: "./img/Procesadores/i7-14700kf.jpg",
        categoria: {
            nombre: "Procesadores",
            id: "procesadores"
        },
        precio: 488379
    },

    // GABIENTES

    {
        id: "gabinete-01",
        titulo: "Corsair 4000D",
        imagen: "./img/Gabinetes/corsair-4000d.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 109600,
    },
    {
        id: "gabinete-02",
        titulo: "Corsair ICUE 4000X",
        imagen: "./img/Gabinetes/corsair-icue400x.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 199950
    },
    {
        id: "gabinete-03",
        titulo: "Cougar MX360",
        imagen: "./img/Gabinetes/cougar-mx360.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 52299
    },
    {
        id: "gabinete-04",
        titulo: "Kolink Inspire",
        imagen: "./img/Gabinetes/kolink-inspire.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 54580
    },
    {
        id: "gabinete-05",
        titulo: "XPG Invader",
        imagen: "./img/Gabinetes/xpg-invader.jpg",
        categoria: {
            nombre: "Gabinetes",
            id: "gabinetes"
        },
        precio: 89950
    },

    // MEMORIAS

    {
        id: "memoria-01",
        titulo: "Corsair Vengeance",
        imagen: "./img/Memorias/corsair-vengeance.jpg",
        categoria: {
            nombre: "Memorias",
            id: "memorias"
        },
        precio: 30790
    },
    {
        id: "memoria-02",
        titulo: "Kingston Fury",
        imagen: "./img/Memorias/kingston-fury.jpg",
        categoria: {
            nombre: "Memorias",
            id: "memorias"
        },
        precio: 64466
    },
    {
        id: "memoria-03",
        titulo: "Patrior Vaiper",
        imagen: "./img/Memorias/patrior-vaiper.jpg",
        categoria: {
            nombre: "Memorias",
            id: "memorias"
        },
        precio: 21599
    },
    {
        id: "memoria-04",
        titulo: "T-Force Delta",
        imagen: "./img/Memorias/t-force-delta.jpg",
        categoria: {
            nombre: "Memorias",
            id: "memorias"
        },
        precio: 143580
    },
    {
        id: "memoria-05",
        titulo: "Team Elite Plus",
        imagen: "./img/Memorias/team-elite-plus.jpg",
        categoria: {
            nombre: "Memorias",
            id: "memorias"
        },
        precio: 22430
    },

    // PLACAS DE VIDEO

    {
        id: "placasVideo-01",
        titulo: "Readon RX 6650XT",
        imagen: "./img/Placasvideo/Redon-rx-6650xt.jpg",
        categoria: {
            nombre: "Placas De Video",
            id: "placasdevideo"
        },
        precio: 322159
    },
    {
        id: "placasVideo-02",
        titulo: "Readon RX 580",
        imagen: "./img/Placasvideo/rx-580.jpg",
        categoria: {
            nombre: "Placas De Video",
            id: "placasdevideo"
        },
        precio: 152139
    },
    {
        id: "placasVideo-03",
        titulo: "GeForce RTX 4060 Ti",
        imagen: "./img/Placasvideo/rtx-4060.jpg",
        categoria: {
            nombre: "Placas De Video",
            id: "placasdevideo"
        },
        precio: 684470
    },
    {
        id: "placasVideo-04",
        titulo: "GeForce RTX 3060",
        imagen: "./img/Placasvideo/rtx-3060.jpg",
        categoria: {
            nombre: "Placas De Video",
            id: "placasdevideo"
        },
        precio: 349770
    }
]



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

// INICIO DEL PROGRAMA
cargarProductos(productos);