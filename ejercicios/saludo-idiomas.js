const espanol = 'Hola, bienvenida al curso de JavaScript ';
const english = 'Hello, welcome to the JavaScript course ';
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cómo te llamas? ', (name) => {
    rl.question('¿En qué idioma quieres que te salude? Español: 1 // English: 2 ', (idiomaRespuesta) => {
        switch (idiomaRespuesta) {
            case '1':
                console.log(espanol + name);
                break;
            case '2':
                console.log(english + name);
                break;
            default:
                console.log('Opción no válida.'); // Manejo de opción no válida
        }
        rl.close(); 
    });
});