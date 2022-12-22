import responsaveis from "../modules/Responsavel.js";

class ResponsavelController {
  
  static listarResponsaveis = (req, res) => {
    responsaveis.find((err, responsaveis) => {
      res.status(200).json(livros)
    })
  }


}
export default ResponsavelController



