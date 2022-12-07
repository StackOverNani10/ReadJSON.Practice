import { Schema, model } from "mongoose";

const characterSchema = new Schema({
    Nombres: {
        type: String,
        require: true
    },
    Apellidos: {
        type: String,
        require: true
    },
    Puntuacion: {
        type: Number,
        require: true
    },
    Habilidad: {
        type: String,
        require: true
    }
});

const characterModel = model("Character", characterSchema);

export default characterModel;
