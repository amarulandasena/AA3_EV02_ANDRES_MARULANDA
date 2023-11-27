/** Importamos los paquetes de funciones que necesitamos. */
import (Math.js);

const Ejercicio1 = () => {

    while (true) {

        /** Pedimos al usuario seleccionar una opción. Hacemos un casting del dato ingresado desde el teclado. */
        let opcion = parseInt(prompt("Seleccione el área o perímetro que desea calcular: "));

        /** validamos que sea un dato correcto. */
        if (typeof opcion != 'number') {
            continue;
        };


        if (opcion == 1) { /** Perímetro del tríangulo. */
            let ladoA = parseFloat(prompt("Ingrese la longitud del lado A en cm: "));
            let ladoB = parseFloat(prompt("Ingrese la longitud del lado B en cm: "));
            let base = parseFloat(prompt("Ingrese la longitud de la base en cm: "));
        
            let perimetro = ladoA + ladoB + base;
            alert("Perímetro tríangulo = " + perimetro + " centimetros.");

        } else if (opcion == 2) { /** Área del triángulo. */
            let base = parseFloat(prompt("Ingrese la longitud de la base en cm: "));
            let altura = parseFloat(prompt("Ingrese la altura del triángulo en cm: "));

            let area = (base * altura) / 2;
            alert("Área triángulo = " + area.toFixed(3) + " centimetros cuadrados."); /**  */

        } else if (opcion == 3) { /** Perímetro del rectángulo. */
            let ladoA = parseFloat(prompt("Ingrese la longitud del lado A en cm: "));
            let ladoB = parseFloat(prompt("Ingrese la longitud del lado B en cm: "));

            let perimetro = 2 * (ladoA + ladoB);
            alert("Perímetro del rectángulo = " + perimetro + " centimetros.");

        } else if (opcion == 4) { /** Área del rectángulo. */
            let ladoA = parseFloat(prompt("Ingrese la longitud del lado A en cm: "));
            let ladoB = parseFloat(prompt("Ingrese la longitud del lado B en cm: "));

            let area = ladoA * ladoB;
            alert("Área del rectángulo = " + area.toFixed(3) + " centimetros cuadrados.");

        } else if (opcion == 5) { /** Perímetro del cuadrado. */
            let ladoA = parseFloat(prompt("Ingrese la longitude del lado del cuadrado en cm: "));

            let perimetro = 4 * ladoA;
            alert("Perímetro del cuadrado = " + perimetro.toFixed(3) + " centimetros.");

        } else if (opcion == 6) { /** Área del cuadrado. */
            let ladoA = parseFloat(prompt("Ingrese la longitud del lado del cuadrado en cm: "));

            let area = Math.pow(ladoA, 2);
            alert("Área del cuadrado = " + area.toFixed(3) + " centimetros cuadrados.");

        } else if (opcion == 7) { /** Perímetro del círculo. */
            let radio = parseFloat(prompt("Ingrese el radio del círculo en cm: "));

            let perimetro = 2 * Math.PI * radio;
            alert("El perímetro del círculo es= " + perimetro.toFixed(3) + " centimetros.");

        } else if (opcion == 8) { /** Área del círculo. */
            let radio = parseFloat(prompt("Ingrese el radio del círculo: "));

            let area = Math.PI * Math.pow(radio, 2);
            alert("El área del círculo es = " + area.toFixed(3) + " centimetros cuadrados.");

        } else if (opcion == 9) { /** Opción para salir de la solución del ejercicio */
            break;
        } else { /** Opción que permite regresar al menú al ingresar una opción invalida. */
            continue;
        };
    };
}

