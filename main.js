import characterModel from "./models/character.js";

/*
fetch("../screens/characterEntry.json")
  .then(res => res.json()) // el método .json() analiza la respuesta JSON en un objeto literal JS
  .then(data => console.log(data));
*/

const nombres = "Herald";
const apellidos = "Jumping";
const puntuacion = "88";
const habilidad = "Super Salto";

const newCharacter = new characterModel({nombres, apellidos, puntuacion, habilidad});

const data = newCharacter[nombres];

console.log(data);