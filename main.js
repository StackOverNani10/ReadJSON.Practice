//import screens from "../screens/characterEntry.json";

console.log("Captura de Caracteres");

const nombres = "Herald";
const apellidos = "Jumping";
const puntuacion = "88";
const habilidad = "Super Salto";

const newCharacter = new characterSchema({nombres, apellidos, puntuacion, habilidad});


console.log(newCharacter);