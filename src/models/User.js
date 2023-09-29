import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        nome: {type: String, required: true },
        email: {Type: String, required: true, unique: true },
        senha: {Type: String, required: true },
        nacionalidade: {Type: String, required: true },
        altura: { type: Number, required: true },
        posição: {Type: String, required: true },
    },
    { timestamps: true }
);

const modelName = mongoose.models.user || mongoose.model("User", userSchema);

export default modelName;