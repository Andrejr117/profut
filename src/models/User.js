import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    nacionalidade: { type: String, required: true },
    posição: { type: String, required: true },
  },
  { timestamps: true }
);

const modelName = mongoose.models.User || mongoose.model("User", userSchema);

export default modelName;