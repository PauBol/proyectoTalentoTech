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

// function ListaSacapuntas(contenedorSacapuntas){
//     document.getElementById("botonSacapuntas").textContent = "SACAPUNTAS"
//     element.querySelectorAll(contenedorLapices)
// }

function ListaArticulos(mainArticulos){
    document.getElementsByClassName("botonTodosArticulos").textContent = "TODOS LOS ARTICULOS"
    location.reload()
}

//     element.getElementById('#mainArticulos')

// function seleccionCards(lapiz){
//     const contenedorLapices =   '<img src="img/lapizAmarillo.jpg" alt="lápiz amarillo" width="400px">'
//                                 '<img src="img/lapizAzul.jpg" alt="lápiz azul"width="400px">'
//                                 '<img class="tercerLapiz" src="img/lapizNegro.jpg" alt="lápiz negro"width="400px"'

                                
//     lapiz.innerHTML(contenedorLapices)
// }




