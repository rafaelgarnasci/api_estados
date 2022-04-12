const http = require('http')

const listaDeEstados = require ('./estados.json');

const app = http.createServer((req, res)=>{
    console.log(listaDeEstados);
res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json");
    const respostaEmJson = JSON.stringify(listaDeEstados);
    res.write(respostaEmJson);
  

    res.end();
})

app.listen(8000, () => console.log ('Servidor iniciado na porta 8000'));