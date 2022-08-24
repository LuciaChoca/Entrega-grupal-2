
const inputText = document.getElementById("inputText");
const addButton = document.getElementById("agregar");
const deleteButton = document.getElementById("limpiar");

let array = [];

/*function getData() {
    
    localStorage.getItem("text");
    document.getElementById("contenedor").innerHTML += item.value;
    console.log();
  }
  
addButton.addEventListener("click", (evt) => {
    
    if (item.value) {
      localStorage.setItem("text", item.value);
    getData();
  }
});*/


function getData() {
    if (item.value) {
        localStorage.setItem("text", item.value);
    
    localStorage.getItem("text");
    document.getElementById("contenedor").innerHTML += item.value;
    console.log();
  }}

// Guardamos un valor cualquiera asociado a la clave example
// (notar que siempre debe almacenarse en String)

localStorage.setItem("example", "example value");


