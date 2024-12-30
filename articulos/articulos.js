console.log("Hola")

let articulos = ["sacapuntas", "lapices"];
let sacapuntas = ['sAzul','sGris','sRojo'];
let lapices= ["lAmarillo", "lAzul", "lNegro"]

const botonTodosArticulos = document.querySelector('.botonTodosArticulos')
const botonLapices = document.querySelector('.botonLapices')
const botonSacapuntas = document.querySelector('.botonSacapuntas')

const mainArticulos = document.querySelector('.mainArticulos')

const contenedorLapices = document.querySelector('.contenedorLapices')
const contenedorSacapuntas = document.querySelector('.contenedorSacapuntas')
const tituloSacapuntas = document.querySelector('.tituloSacapuntas')
const tituloLapices = document.querySelector('.tituloLapices')

function ListaSacapuntas(botonSacapuntas){
    mainArticulos.appendChild(tituloSacapuntas);
    mainArticulos.appendChild(contenedorSacapuntas);

    document.getElementsByClassName("botonSacapuntas").textContent ="SACAPUNTAS"
    contenedorLapices.remove()
    tituloLapices.remove()
    alert("Lista de Sacapuntas");
}

function ListaLapices(botonLapices){

    mainArticulos.appendChild(tituloLapices);
    mainArticulos.appendChild(contenedorLapices);

    document.getElementsByClassName("botonLapices").textContent = "LÁPICES"
    contenedorSacapuntas.remove()
    tituloSacapuntas.remove()
    alert("Lista de Lapices");
}

function ListaArticulos(mainArticulos){
    document.getElementsByClassName("botonTodosArticulos").textContent = "TODOS LOS ARTICULOS"
    location.reload()

}


// JSON -.-

/* document.addEventListener("DOMContentLoaded", ()=> {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            const contenedorL = document.getElementsByClassName("contenedorLapices");
            data.forEach(producto => {
                contenedorL.innerHTML += `
                    <section class="contenedorLapices">
                        <img src="${producto.image}" alt="${producto.title}">
                        <h3>${producto.title}</h3>
                    </section>
                `;
            });
        })
})

const misSacupuntas={
    articulo : "Sacapunta",
    color : "Azul",
    precio : 1
}
console.log(misSacupuntas) */
