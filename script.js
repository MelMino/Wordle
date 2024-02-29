let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH','MONEY']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

const button = document.getElementById("guess-button");

console.log(palabra);
button.addEventListener("click", intentar);
function intentar() {
    console.log(palabra);
    const input = document.getElementById("guess-input");
    const valor = input.value;
    const INTENTO = leerIntento();
    console.log(INTENTO);
    if (INTENTO === palabra) {
        console.log("GANASTE!")

    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter'; 
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#C3E090';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#E7DBAB';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#AAB2BD';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
                    intentos--
    if (intentos == 0) {
        console.log("PERDISTE!")
    }
    if (INTENTO === palabra) {
        terminar("<h1>GANASTE! 🥰 :D</h1>")
        return
    }
    if (intentos == 0) {
        terminar("<h1>PERDISTE! 😔 D:</h1>")
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}