
const Ejercicio3 = () => {

    /** Declarar los vectores para el ingreso y la salida de los datos */
    var vector1 = [ ];
    var vector2 = [ ];
    var combinacionVectores = [ ];

    /** Función para el ingreso de los datos en los vectores. */
    const cargaVectores = () => {
        vector3 = [ ];                                          /** Vector que será retornado con los datos cargados. */
        let contador = 1;                                       /** Variable contadora para control del ingreso de los datos. */

        let numero = parseInt(prompt("Ingrese el primer número: "));
        vector3.push(numero);                                   /** Ingresamos el primer dato del vector. */

        let posicion = 0;                                       /** Indicar la posición del vector donde se encuentra el dato */
        while (contador < 5) {                                  /** Terminamos de cargar el vector. */
            numero  = parseInt(prompt("Ingrese un número mayor que el anterior: ")) ;
            if (typeof numero != 'number'){
                continue;
            }else{
                vector3.push(numero);
            }
            

            if (vector3[posicion] > vector3[contador]) {
                alert("Error, ingrese un número mayor.");
                vector3.pop();                                  /** Eliminamos el último dato ingresado. */
                /**continue; */      
            }else{
                contador++;                                     /** Si el dato es valido, incrementamos el contador de datos. */
                posicion++;
            };
            
        };
        return vector3;
    };

    vector1 = cargaVectores();
    vector2 = cargaVectores();

    /** Llamar la función para combinar ambos vectores. */
    combinacionVectores = vector1.concat(vector2);

    /** Ordenar el vector de manera ascendente */
    let cambio = 0;
    for (let i = 0; i < 10; i++){
        for (let j = i+1; j <= 10; j++){
            if (combinacionVectores[i] > combinacionVectores[j]){
                cambio = combinacionVectores[i];
                combinacionVectores[i] = combinacionVectores[j];
                combinacionVectores[j] = cambio;
            };
        };
    };

    alert("A = " + "[" + vector1 + "]" + "\n" +
          "B = " + "[" + vector2 + "]" + "\n" +
          "Combinación = " + "[" + combinacionVectores + "]");
    
};