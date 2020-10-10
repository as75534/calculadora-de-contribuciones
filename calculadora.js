// function sumar(numero1, numero2) {
//     // const resulatado = numero1 + numero2
//     // let resultado = numero1 + numero2
//     // 
//     // Usando const no puedes hacer esto: resultado = 3;
//     // Usando let sí puedes haer esto: resultado = 3
//     const resultado = numero1 + numero2;
//     return resultado;
// }

// // Calcular el resultado.
// const resultado = sumar(2, 2);

// // Imprimir resultado.
// const resultadoH1 = document.getElementById("resultado");
// resultadoH1.innerText = resultado;

// // Operadores: +, -, *, /
// //  2 * (5 + 3) = 10 + 3 = 13

let esPorDia = true;

const resultadosUl = document.getElementById("resultados");
resultadosUl.style.display = "none";

const tipoDePrimiciaElement = document.getElementById("tipoDePrimicia");

tipoDePrimiciaElement.onchange = function() {
    const tipoDePrimicia = tipoDePrimiciaElement.value;
    esPorDia = tipoDePrimicia == "Un día";
}

function calcularDatosDeContribuciones(salario) {
    const primicia = esPorDia ? Math.round(salario / 24, 10) : Math.round((salario / 24) / 8);
    const diezmo = Math.round((salario - primicia) / 10);
    const total = primicia + diezmo;

    return { primicia: primicia, diezmo: diezmo, total: total };
}

//imprimir 
function mostrarCalculoBoton() {

    const inputSalario = document.getElementById("salario");
    const salario = inputSalario.value;
    const contribuciones = calcularDatosDeContribuciones(salario);

    const diezmoHTML = document.getElementById("diezmo");
    const primiciaHTML = document.getElementById("primicia");
    const totalHTML = document.getElementById("total");

    diezmoHTML.innerText = contribuciones.diezmo;
    primiciaHTML.innerText = contribuciones.primicia;
    totalHTML.innerText = contribuciones.total;

    resultadosUl.style.display = "block";
}

const botonHTML = document.getElementById("calcularContribuciones");
botonHTML.onclick = mostrarCalculoBoton;



// +, - , ==, =,