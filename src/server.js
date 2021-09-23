const express = require('express')
const logger = require('./logger')
const pinoHttp = require('pino-http')({logger})//Passamos o parâmetro de que o logger é o mesmo que usamos acima, que é onde estamos recebendo o valor da const logger

const app = express()

app.use(pinoHttp) //Para que o express use o pinoHttp como um middleware

app.get('/', (req, res) => res.json({msg: "Sucesso"}) )

module.exports = app;