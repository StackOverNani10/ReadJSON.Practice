import characterModel from "./models/character.js";
import fs from "fs";
import path from "path"

const pathJSON = path.join('./screens/characterEntry.json');

const readJSON = () => {
  const data = fs.readFileSync(pathJSON, 'utf-8');
  return JSON.parse(data);
};

const writeJSON = (data) => {
  fs.writeFileSync(pathJSON, data);
};

const data = readJSON();

console.log(data);
