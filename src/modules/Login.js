import mongoose from "mongoose";
import bcrypt from "bcrypt";

const loginSchema = new mongoose.Schema({
  id: {type: String},
  nomeCompleto : {type: String, required: true},
  email : {type: String, required: true},
  senha: {type: String, required: true},
  privilegio: {type: String, required: true}
});

// Função que realiza a criptografia das senhas
loginSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('senha')){
    bcrypt.hash(this.senha, 10,
      (err, senhaHash) => {
        if (err)
          next(err)
        else {
          this.senha = senhaHash;
          next();
      }
    })
  }
})

//Função que valida as senhas no Login
loginSchema.methods.confereSenha = function (senha, callback) {
  bcrypt.compare(senha, this.senha, function(err, same){
    if (err)
      callback(err);
    else
      callback(err, same);
  })
}

const logins = mongoose.model('logins', loginSchema);

export default logins;