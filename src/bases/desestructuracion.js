// Desestructuración básica
const objeto = {
    nombres: "Cristian Camilo",
    apellido: "Leon Avila",
    edad: 36
};

const { nombres, apellidos, edad } = objeto;

// Desestructuración en argumentos de función

const getPersona = ( { nombres } ) => {
    console.log( nombres );
    
};

console.log( getPersona(objeto) );

const ubicacion = {
    ciudad: "Bogotá",
    pais: "Colombia",
    latlng: {
        lat: 14.345,
        lng: 34.654
    }
};

// Desestructuración de un objeto dentro de otro objeto

const { ciudad, pais, latlng: { lat, lng }} = ubicacion ;

console.log( ciudad, pais, lat, lng );

