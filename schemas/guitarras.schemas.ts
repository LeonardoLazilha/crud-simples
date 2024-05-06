import mongoose from 'mongoose';
const { Schema } = mongoose;

const guitarraSchema = new Schema({
  marca: String, 
  modelo: String,
  numeroCasas: Number,
  captador: String,
  cor: String,
  valor: Number
});

export default mongoose.model("Guitarra", guitarraSchema, "guitarras")
