/* PARTE 1 DA AULA
class EnviaMensagem extends EventEmitter {
    enviar(mensagem) {
        console.log('Enviando mensagem', mensagem);
        this.emit('mensagemEnviada', mensagem);
    }
} 
*/

/*MODO 1:
 const EventEmitter = require('events')
 const events = new EventEmitter();

 function enviar(mensagem) {
     console.log('Enviando mensagem:', mensagem);
     events.emit('mensagemEnviada', mensagem);
}

 module.exports.enviar = enviar;
 */


//MODO 2:
const EventEmitter = require('events');

class EnviaMensagem extends EventEmitter {
    enviar(mensagem) {
        console.log('Enviando mensagem', mensagem);
        this.emit('mensagemEnviada', mensagem)
    }
}

module.exports = EnviaMensagem;

//neste o module.exports nao precisao no .nomeDoMetodo