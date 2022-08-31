
const inputText = document.getElementById("item");
const addButton = document.getElementById("agregar");
const deleteButton = document.getElementById("limpiar");

let array = [];
let array2 = "";
let array3 = [];

function textArray () {
  array.push (item.value)
}
 
function almacenar () {
localStorage.setItem('myArray', JSON.stringify(array));
}

function convertir () {
  let array2= localStorage.getItem('myArray');
  array3 = JSON.parse(array2);
  }

function traer () {
  for (const element of array3) {
    document.getElementById("contenedor").innerHTML += '<li>' + element + '</li>';
  
  } 
  }
  


addButton.addEventListener("click", (evt) => {
  textArray();
  almacenar ();
  convertir();
  document.getElementById("contenedor").innerHTML= "" ;
  traer();
  

});


document.addEventListener("DOMContentLoaded",(evt) => {

  convertir();
  traer();
  

}); 





