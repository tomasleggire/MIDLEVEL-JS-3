/////////////////////////////EVENTOS///////////////////////////////////////////////////////

//como añadir una escucha de evento a un objeto:
                                                                 /*
const button = document.querySelector(".button");

button.addEventListener("click",()=>{
    alert("holis");
})
                                                                   
//como removerla con una function declarada fuera:

const button = document.querySelector(".button");

button.addEventListener("click",saludar);

function saludar() {
    alert("hola");
    button.removeEventListener("click",saludar);
}  

                                                                    

//Objeto event:

//desp se ve bien mas adelante // muestra el evento que se ejecuta y todas sus propiedades

const button = document.querySelector(".button");

button.addEventListener("click",(e)=>{
    console.log(e);
});

                                                               

//Event flow:
//El orden de como se van a ejecutar los eventos.
//Al poner ,true al final de la funcion del evento, le estamos dando prioridad para que se ejecute primero sobre los demas.
// e.stopPropagation() dentro de la funcion hace que cuando se realice ese evento, no se ejecute ningun otro evento asociado.
//sin el true, es decir por defecto, se ejecutan los eventos desde el mas especifico (hijos), hasta el menos especifico (padres).


const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

button.addEventListener("click",(e)=>{
    alert("Di click en el boton");
    e.stopPropagation();
});

contenedor1.addEventListener("click",(e)=>{
    alert("Di click en el contenedor rojo");
},true);

contenedor2.addEventListener("click",(e)=>{
    alert("Di click en el contenedor azul");
});

                                                              

/////////////////////////////////////////////MOUSE EVENTS:

////////////MAS USADOS:

//click -> click
//dlbclick -> doble click (en menos de medio segundo)
//mouseover -> se ejecuta cuando el puntero se mueve dentro del elemento u de uno de sus hijos
//mouseout -> se ejecuta cuando se mueve el puntero fuera de un elemento o sus hijos

///////////OTROS: 

//contextmenu -> cuando hago click derecho sobre un elemento (hacer click y soltar dentro)
//mouseenter -> ?
//mousemove -> se ejecuta siempre una y otra vez mientras se mueva el mouse sobre del elemento
//mouseleave -> se ejecuta siempre una y otra vez mientras se mueva el mouse fuera del elemento
//mousedown -> se ejecuta cuando se hace click, no hace falta soltarlo dentro
//mouseup -> no importa donde se haga click, se ejecuta siempre que se suelte el clik dentro del elemento


/////////////////////////////////////////////KEYBOARD EVENTS:

//Funcionan en este orden primero, segundo y tercero.

//keydown -> se ejecuta cuando se presiona una tecla
//keypress -> se ejecuta cuando se presiona y se suelta una tecla (ambas cosas)
//keyup -> se ejecuta cuando se suelta una tecla


/////////////////////////////////////////EVENTOS DE INTERFAZ

//error -> se ejecuta cuando hay algun tipo de error (no se carga, etc) en un objeto multimedia
//load -> se ejecuta cuando un objeto se ha cargado
//beforeunload -> ocurre cuando la pagina esta a punto de descargarse, osea irte a otro sitio
//unload -> ocurre una vez que se ha descargado la pagina
//resize -> ocurre cada vez que se cambia la resolucion de la pantalla
//scroll -> ocurre cuando se detecta un scroll
//select -> ocurre cada vez que el usuario selecciona algun texto o textarea


////////////////////////////////TIMERS///////////////////////////////////
//Nos permite trabajar con tiempos.


let temporizador = setTimeout(()=>{
    document.write("Leyi");  //Crea un temporizador para ejecutar una funcion y en el 2do parametro el tiempo en milisegundos
},2000);



let intervalo = setInterval(()=>{
    document.write("Perro"); //Ejecuta la funcion una y otra vez
},2000);


clearTimeout(temporizador);  //Hace que se termine de ejecutar un temporizador;

setTimeout(()=>{
    clearInterval(intervalo);  //Una forma de hacer que termine de ejecutarse un interval
},7000);

                                                                     */



/////////////////////////////////////PROBLEMA COFLA A/////////////////////////////
 
                                                                     /*
const name = document.getElementById("nombre");
const mail = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");


boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre no puede tener menos de 5 caracteres";
        return error;
    } else if (nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre no puede tener mas de 40 caracteres";
        return error;
    } else if (mail.value.length < 5 || 
               mail.value.lengt > 40 ||
               mail.value.indexOf("@") == -1 ||
               mail.value.indexOf(".") == -1) {
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;
    } else if (materia.value.lengt < 4 || materia.value.lengt > 40) {
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    }
    error[0] = false;
    return error;
}

                                                                           */




////////////////////////PROBLEMA COFLA B/////////////////////////////////



const alumnos = [{
    nombre: "Tomas Leyi",
    email: "tomasleyi@gmail.com",
    materia: "Fisica"
},{
    nombre: "Karin Guerra",
    email: "karin@gmail.com",
    materia: "Logica"
},{
    nombre: "Pelado Lucho",
    email: "pelado@gmail.com",
    materia: "Natacion"
},{
    nombre: "Pagano Facu",
    email: "pagano@gmail.com",
    materia: "Quimica"
},{
    nombre: "Cofla xd",
    email: "cofla@gmail.com",
    materia: "Gimnasia"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
   let datos = alumnos[alumno];
   let nombre = datos["nombre"];
   let email = datos["email"];
   let materia = datos["materia"];
   let htmlCode = `
      <div class="grid-item nombre">${nombre}</div>
      <div class="grid-item email">${email}</div>
      <div class="grid-item materia">${materia}</div>
      <div class="grid-item semana">
         <select class="semana-elegida">
             <option value="Semana 1">Semana 1</option>
             <option value="Semana 2">Semana 2</option>
         </select>
      </div>`;
      contenedor.innerHTML+= htmlCode;
};

boton.addEventListener("click",()=>{
    let confirmar = confirm("Realmente quieres confirmar las mesas?")
    if (confirmar) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
    }
})






