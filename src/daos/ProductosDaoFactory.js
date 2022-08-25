import ContenedorSQL from './../contenedores/ContenedorSQL.js';
import ContenedorArchivo from './../contenedores/ContenedorArchivo.js';
import ContenedorMemoria from './../contenedores/ContenedorMemoria.js';
import config from '../config.js';

const opcion = process.argv[2] || 'Mem';
const rutaArchivoProductos = `${config.fileSystem.path}/productos.json`;

let dao

switch (opcion) {
    case 'DB':
        dao = new ContenedorSQL(config.sqlite3,'productos');
        break
    case 'File':
        dao = new ContenedorArchivo(rutaArchivoProductos)   
        break
    default:
        dao = new ContenedorMemoria()
}

export default class ProductosDaoFactory {
    static getDao() {
        return dao
    }
}
