import logins from "../modules/Login.js";
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()
const segredo = process.env.JWT_TOKEN

class LoginController {
  
  static criarLogin = (req, res) => {
    let login = new logins(req.body);
    login.save((err) => {    
      if(err) {
        res.status(500).send({message: `${err.message} - Falha ao registrar novo usuário`})
      } else {
        res.status(201).send(login.toJSON())
      }
    })
  }

  static efetuarLogin = async(req,res) =>{
    const {email, senha} = req.body;

    try {
      let login = await logins.findOne({email})
      if(!login)
        res.status(401).json({error: 'Endereço ou Senha inválido'});
      else {
        login.confereSenha(senha, function(err, same){
          if(!same)
            res.status(401).json({error: 'Endereço ou Senha inválido'});
          else {
            const token = jwt.sign({email}, segredo, {expiresIn: '1d'});
            res.json({login: login, token : token });
          }
      })
    }
   } catch {
      res.status(500).json({error : 'Erro ao efetuar Login. Tente novamente.'})
    }
  
  }



}
export default LoginController



