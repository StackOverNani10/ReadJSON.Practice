import characterModel from "./models/character.js";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const pathJSON = path.join('./screens/characterEntry.json');

const readJSON = () => {

  const data = fs.readFileSync(pathJSON, 'utf-8');
  if (data.length === 0){
    const template = {
      "id": "characterEntry",
      "maxCol": 80,
      "title": "Captura de caracteres",
      "message": "Gracias Por escoger un caracter!!!",
      "fields": [
        { 
        "name": {
          "label": "Nombres",
          "value": "",
          "required": true,
          "messages": "El nombre es requerido"
        }, 
        "apellido": {
          "label": "Apellidos",
          "value": "",
          "required": true,
          "messages": "El apellido es requerido"
        },
        "puntaje": {
          "label": "Puntaje",
          "value": "",
          "required": true,
          "messages": "El puntaje es requerido"
        },
        "habilidad": {
          "label": "Habilidad",
          "value": "",
          "required": true,
          "messages": "La habilidad es requerida"
        }
        }
      ],
      "actions": [
        { "name": "save", "option": "G", "handler": "Program.Save", "succ": "characterEntry", "fail": "characterEntryFailure" },
        { "name": "cancel", "option": "C", "handler": "Program.Cancel", "succ": "EXIT!", "fail": "EXIT!" }
      ]
    }
    return template;
  }
  return JSON.parse(data);
};

const writeJSON = (data) => {
  const template = {
    fields: data,
  };
  fs.writeFileSync(pathJSON, JSON.stringify(template, null, 4), "utf-8");
};

const { fields } = readJSON();

fields.push({
  "id": crypto.randomUUID(),
  "name": "Herald",
  "apellido": "Jumping",
  "puntuaje": "88",
  "habilidad": "Super Salto"
});

writeJSON(fields);

