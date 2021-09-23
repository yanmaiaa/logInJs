const pino = require('pino')({
  //Vamos configurar para vermos os logs em níveis acima, como debug etc, usaremos aqui
  level: 'debug',
  prettyPrint: {
    levelFirst: true,
    colorize: true,
  }
}); //como é uma função, usamos os "()" depois para chamá-la

module.exports = pino;