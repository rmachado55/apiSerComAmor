import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {type: String},
  autor : {type: String, required: true},
  data : {type: Date, required: true},
  titulo: {type: String, required: true},
  corpo: {type: String, required: true},
  tag: {nome : {type : String, required: true}}
});

const posts = mongoose.model('posts', postSchema)

export default posts