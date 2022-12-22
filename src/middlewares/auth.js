import * as dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import logins from '../modules/Login.js' 

dotenv.config()

const segredo = process.env.JWT_TOKEN

const Autenticado = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if(!token)
        res.status(401).json({error: 'Não Autorizado. Token não fornecido nos parâmetros da requisição'});
    else{
        jwt.verify(token, secret, (err, decoded)=> {
            if(err)
            res.status(401).json({error: 'Não Autorizado. Erro no Token'});
            else {
                req.email = decoded.email;
                logins.findOne({email: decoded.email})
                .then(user => {
                    req.user = user;
                    next();
                })
                .catch(err => {
                    res.status(401).json({error: err})
                })
            }
        })
    }
}

export default Autenticado