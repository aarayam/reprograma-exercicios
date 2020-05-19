/* MODO 1
const EventEmitter = require('events');
const events = new EventEmitter();

events.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso! `)
});

const enviaMensagem = require('./envia-mensagem.js');
enviaMensagem.enviar('Olá Mundo!')
*/

const enviaMensagem = require('./envia-mensagem.js');
const mensagem = new enviaMensagem();

mensagem.on('mensagemEnviada', mensagem => {
    console.log(`A mensagem "${mensagem}" foi enviada com sucesso! `)
});
mensagem.enviar('Olá, mundo!');
