import balancos from "../modules/Balanco.js";
import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()
const segredo = process.env.JWT_TOKEN

class BalancoController {
  
  static uploadBalanco = (req, res) => {
    console.log(req.files.foo)
  }

  
}
export default BalancoController



