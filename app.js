require ('colors');
//console.clear();

//importacion de nuestros paquetes
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')
//const Tarea = require('./models/tarea');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

const main = async () => {
    let opt = "";
    const tareas = new Tareas();
    
    const tareasDB = leerDB();
    if(tareasDB){
        //establecer las tareas
        tareas.cargarTareaFromArray(Object.values(tareasDB));
    }
    //await pausa();
    
    do {
        //esperamos que se digite algo
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await  leerInput('descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            default:
                break;
        }
        await pausa();
        guardarDB(tareas._listado); // guardamos en todo momento
    } while (opt !== '0');
}

main();