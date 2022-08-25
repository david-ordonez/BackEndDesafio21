export default class MensajDto{
    constructor({email,nombre,apellido,edad,alias,avatar}){
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.alias = alias;
        this.avatar = avatar;
    }
}

export function asDto(mensaje){
    if(Array.isArray(mensaje)){
        return mensaje.map(m => new ProductoDTO(m));
    } else {
        return new ProductoDTO(mensaje);
    }
}