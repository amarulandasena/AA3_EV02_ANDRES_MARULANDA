
const Ejercicio2 = () => {
    /** Declarar los vectores para las edades. */
    var edades = [ ];
    var mayoresEdad = [ ];
    var menoresEdad = [ ];

    /** Ciclo para el ingreso de las edades. */
    let sumaEdades = 0;                                         /** Acumular las edades ingresadas para calcular el promedio */
    
    let contadorEdades = 0
    while (contadorEdades < 10) {
        
        let edad = parseInt(prompt("Ingrese la edad: "));       /** Variable para almacenar cada una de las edades ingresadas */

        if (typeof edad != 'number'){                           /** Validamos el ingreso de datos numéricos */
            continue;
        };

        if ((edad < 1) || (edad > 120)){                        /** Validar que la edad este dentro del rango correcto */
            continue;
        }; 
        
        edades.push(edad);                                      /** Agregamos una edad al vector */
        sumaEdades += edad;                                     /** Sumamos la edad ingresada */
        contadorEdades += 1;                                    /** Incrementamos la variable de control */

    };

    let promedioEdades = sumaEdades / edades.length;            /** Calcular el promedio de las edades */

    /** Ciclo para buscar los mayores y menores de edad */
    for (let i = 0; i < edades.length; i++){

        if (edades[i] >= 18){                                   /** Cargamos el vector de mayores de edad */
            mayoresEdad.push(edades[i]);                        /** mayoresEdad.lenght = cantidad de mayores de edad */
        }else {
            menoresEdad.push(edades[i]);                        /** Cargamos el vector de menores de edad */
        };                                                      /** menoresEdad.lenght = cantidad de menores de edad */
    };

    /** Ciclos para buscar la menor y la mayor edad */
    let edadMenor = menoresEdad[0];                             /** La menor o mayor edad se encuentra en la 1ra posición de cada vector */
    let edadMayor = mayoresEdad[0];
    let adultosMayores = 0;

    for (let j = 1; j < menoresEdad.length; j++){               /** Buscar la menor edad */
        if (menoresEdad[j] < edadMenor){
            edadMenor = menoresEdad[j];
        };
    };

    for (let j = 0; j < mayoresEdad.length; j++){               /** Buscar la edad mayor */
        if(mayoresEdad[j] > edadMayor){
            edadMayor = mayoresEdad[j];
        };

        if(mayoresEdad[j] >= 60){                               /** Contamos la cantidad de adultos mayores */
            adultosMayores += 1;
        };
    };

    /** Mostrar en pantalla las cantidades solicitadas */
    alert("Menores de edad: " + menoresEdad.length + "\n" + 
    "Mayores de edad: " + mayoresEdad.length + "\n" +
    "Adultos mayores: " + adultosMayores + "\n" +
    "Edad menor: " + edadMenor + " años" + "\n" + 
    "Edad mayor: " + edadMayor + " años" + "\n" +
    "Promedio edades: " + promedioEdades.toFixed(2) + " años");
};