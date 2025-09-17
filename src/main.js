import '../src/normalize.css'
import '../src/style.css'


/**** Boton responsive Navbar */
console.log(document.querySelector("#abrir"));
console.log(document.querySelector("#cerrar"));

const nav = document.querySelector("#nav"); 
const abrir = document.querySelector("#abrir"); 
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () =>{
    nav.classList.add("visible"); 
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible"); 
})


