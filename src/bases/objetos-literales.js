// Objectos literales

const persona = {
    nombres: "Cristian Camilo",
    apellidos: "Leon Avila",
    edad: 36,
    direccion: {
        ciudad: "Bogotá",
        zip: 111061
    }
};

const persona2 = { ...persona };
persona2.nombres = "Jorge Enrique";
console.table( persona );
console.table( persona2 );

