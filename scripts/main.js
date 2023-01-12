/*
Cambia la imagen cuando hacemos click sobre esta
*/
let miImagen = document.querySelector('img');
miImagen.onclick = function(){
    let elAtributoSrc = miImagen.getAttribute('src');
    if(elAtributoSrc === 'images/logo.svg'){
        miImagen.setAttribute('src','images/logo2.png');
    }else{
        miImagen.setAttribute('src','images/logo.svg');
    }
}

/*
Almacena al usuario y le da un mensaje de Bienvenida
*/
// Seleccionar los elementos
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

//Función que almacena el nombre del usuario
function setUserName(){
    let userName = prompt('Ingrese su nombre: ');
    if(!userName){
        setUserName();
    }else{
        localStorage.setItem('nombre', userName);
        miTitulo.textContent = "Hola " + userName + ", Mozilla es genial!";
    }
}

if(!localStorage.getItem('nombre')){
    setUserName();
}else{
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = "Hola " + nombreAlmacenado + ", Mozilla es genial!";
}

miBoton.onclick = setUserName;