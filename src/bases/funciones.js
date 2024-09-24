// Función tradicional, no se recomienda su uso pues puede sobreescribirse su valor
function saludar ( nombre ) {
    return `Hola ${nombre}`;
}

saludar = 50; // Aquí se sobre escribe la función y se convierte en un número, lo que puede generar errores.

// Fuciones lambda o flecha

const saludar1 = ( nombre )  => `Hola ${ nombre }`; 

// Función flecha con retorno de un objeto
const saludar2 = () => ({nombre: "Cristian", apellido: "Leon Avila"});


