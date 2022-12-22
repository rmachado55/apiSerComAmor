import mongoose from "mongoose";

const responsavelSchema = new mongoose.Schema({
  id: {type: String},
  nomeCompleto : {type: String, required: true},
  cargo : {type: String, required: true}
})

const responsaveis = mongoose.model('responsaveis', responsavelSchema)

export default responsaveis;