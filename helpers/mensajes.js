const { resolve } = require('path');

require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log("======================".green);
        console.log("Seleccione una opcion:".green);
        console.log("======================".green);

        console.log(`${'1.'.green} Crear Tarea`);
        console.log(`${'2.'.green} Listar Tareas`);
        console.log(`${'3.'.green} Listar Tareas Completas`);
        console.log(`${'4.'.green} Listar Tareas Pendientes`);
        console.log(`${'5.'.green} Completar Tareas`);
        console.log(`${'6.'.green} Borrar Tareas`);
        console.log(`${'0.'.green} Salir`);

        // Paquete propio de NODE

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question("Seleccione una opción: ", (opt) => {
            readline.close();
            // se resuelve la promesa
            resolve(opt);
        });

    });
}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'Enter'.green} para continuar\n`, (opt) => {
            readline.close();
            // se resuelve la promesa
            resolve();
        });
    });
}

module.exports = { mostrarMenu, pausa }