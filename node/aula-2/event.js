/*const seuEvento = require('events');
const batata = new seuEvento();

batata.on('MensagemEnviada', function() { 
    console.log('Ouvi esse evento!');
});

nome.emit('MensagemEnviada')
*/


const Mayara = require('events')
const nome = new Mayara()

nome.on('taRodando', function() {
    console.log('Ouvi esse evento!')
});

nome.emit('taRodando')

//obrigatorio ter o required
//evento é pra avisar que alguma coisa já aconteceu, o que voce vai fazer a partir dele

