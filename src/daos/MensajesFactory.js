import ContenedorSQL from './../contenedores/ContenedorSQL.js';
import ContenedorArchivo from './../contenedores/ContenedorArchivo.js';
import ContenedorMemoria from './../contenedores/ContenedorMemoria.js';
import config from '../config.js';

const opcion = process.argv[2] || 'Mem';
const rutaArchivoMensajes = `${config.fileSystem.path}/mensajes.json`;

let dao

switch (opcion) {
    case 'DB':
        dao = new ContenedorSQL(config.sqlite3,'mensajes');
        break
    case 'File':
        dao = new ContenedorArchivo(rutaArchivoMensajes)   
        break
    default:
        dao = new ContenedorMemoria()
}

export default class MensajesDaoFactory {
    static getDao() {
        return dao
    }
}
