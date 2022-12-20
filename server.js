const http = require("http")

const port = 3000;

const rotas = {
  '/admin' : 'API Admin',
  '/blog' : 'API Post Blog',
  '/diretoria' : 'API Edição Diretoria',
  '/transparencia' : 'API Edição Demonstrativo Financeiro',
  '/usuarios' : 'API Controle de acesso'

}

const server = http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})