
//Generamos el prompt para obtener la cadena del usuario
const cadena = prompt('Introduzca una frase sin espacios');

/* Generamos letra aleatoria */
function getLetter() {

    //Variable donde almacenaremos el ramdom obtenido
    let result = '';         
    
    //longitud del ramdom
    const characters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';

    //Variable donde el ramdon se almacenará
    let charactersLength = characters.length;

    console.log("Hay " + charactersLength + " carácteres");


    //
    let random = Math.random() * charactersLength

    console.log("random es igual a " + random);

    let floor = Math.floor(random)

    console.log("floor es igual a " + floor);

    result = characters.charAt(floor);

    return result;
}

/* Comprobar si la cadena contiene la letra */

let letter = getLetter();

console.log(letter);


alert(cadena.includes(letter));





