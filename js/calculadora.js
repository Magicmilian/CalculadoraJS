//INICIALIZAMOS LA CALCULADORA
let operando = ""
document.getElementById("calculoanterior").innerText = ""

//ESTA FUNCION LIMPIA LA PANTALLA
function clearAll() {
    let primerLinea = document.getElementById("calculoactual")
    let segundaLinea = document.getElementById("calculoanterior")
    primerLinea.innerText = ""
    segundaLinea.innerText = ""
    return
}

//ESTA FUNCION REALIZA EL CALCULO CUANDO SE PRESIONA IGUAL
function calculation() {
    let primervalor = parseFloat(document.getElementById("calculoactual").innerText)
    let segundovalor = parseFloat(document.getElementById("calculoanterior").innerText)
    let resultado
    if (operando == "+") {
        resultado = segundovalor + primervalor
    }
    if (operando == "-") {
        resultado = segundovalor - primervalor
    }
    if (operando == "/") {
        resultado = segundovalor / primervalor
    }
    if (operando == "*") {
        resultado = segundovalor * primervalor
    }
    console.log(resultado)
    clearAll()
    document.getElementById("calculoactual").innerText = resultado
    return
}

//ESTA FUNCION PERMITE EL CALCULO SIN APRETAR EL BOTON IGUAL A MEDIDA QUE SE AGREGAN OPERANDOS
function innerCalculation() {
    let primervalor = parseFloat(document.getElementById("calculoactual").innerText)
    let segundovalor = parseFloat(document.getElementById("calculoanterior").innerText)
    let resultado = 0
    if (operando == "+") {
        resultado = segundovalor + primervalor
        document.getElementById("calculoanterior").innerText = resultado
    }
    if (operando == "-") {
        resultado = segundovalor - primervalor
        document.getElementById("calculoanterior").innerText = resultado
    }
    if (operando == "/") {
        resultado = segundovalor / primervalor
        document.getElementById("calculoanterior").innerText = resultado
    }
    if (operando == "*") {
        resultado = segundovalor * primervalor
        document.getElementById("calculoanterior").innerText = resultado
    }
    return
}

//ESTA FUNCION REGISTRA LOS BOTONES NUMERICOS, EL PUNTO, Y LOS OPERADORES
function buttonpressed(valorboton) {
    //DEFINIMOS LAS VARIABLES PRIMER VALOR Y LAST CHAR
    //LAST CHAR LO UTILIZAMOS PARA SABER SI EL ULTIMO VALOR ES UN PUNTO
    let primervalor = document.getElementById("calculoactual").innerText
    console.log("El valor de la variable primervalor antes de apretar el boton era " + primervalor)
    //SI YA TENIA UN PUNTO EL NUMERO, NO HACEMOS NADA
    if (valorboton == "." && dotscanner(primervalor) == false) {
        return
    }
    //DESPUES PREGUNTAMOS, EL VALOR INGRESADO ES UN NUMERO O UN PUNTO?
    if (!isNaN(valorboton) || (valorboton == ".")) {
        let primerLinea = document.getElementById("calculoactual")
        // console.log("Se presiono el boton " + valorboton)
        primerLinea.innerText = primerLinea.innerText + valorboton
        return
    }
    //CUALQUIER OTRO CASO SIGNIFICA QUE ES UN OPERADOR POR LO QUE PASAMOS EL VALOR AL CALCULO ANTERIOR QUE SERIA LA SEGUNDA LINEA
    else {
        let primerLinea = document.getElementById("calculoactual")
        let segundaLinea = document.getElementById("calculoanterior")
        if (segundaLinea.innerText != "") {
            innerCalculation()
            operando = valorboton
            primerLinea.innerText = ""
        }
        else {
            segundaLinea.innerText = primerLinea.innerText
            primerLinea.innerText = ""
            operando = valorboton
        }
        return
    }
}

//ESTA FUNCION DEVUELVE VERDADERO SI NO HAY NINGUN PUNTO EN EL STRING Y FALSO SI HAY UN PUNTO EN EL STRING
function dotscanner(stringtext) {
    let scanner = stringtext.indexOf(".")
    if (scanner == -1) {
        return true
    }
    else {
        return false
    }
}


