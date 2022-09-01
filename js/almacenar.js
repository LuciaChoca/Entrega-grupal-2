
const inputText = document.getElementById("item");
const addButton = document.getElementById("agregar");
const deleteButton = document.getElementById("limpiar");

let array = [];

function textArray () {
  array.push (item.value)
}
 
function almacenar () {
localStorage.setItem('myArray', JSON.stringify(array));
}

function convertir () {
  array= JSON.parse(localStorage.getItem('myArray'));
  }

function traer () {
  for (const element of array) {
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




//deleteButton.addEventListener("click", e )



