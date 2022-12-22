import mongoose from "mongoose";


const balancoSchema = new mongoose.Schema({
  id: {type: String},
  mes : {type: Number, required: true},
  ano : {type: Number, required: true},
  arquivo : {type: Number, required: true},
})

const balancos = mongoose.model('balancos', balancoSchema);

export default balancos