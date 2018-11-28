const EventEmitter = require('events')
const os = require('os')

class CalculoMemoria extends EventEmitter {
    enviar() {
        const memoriaLivre = os.freemem();
        console.log('Calculando memória livre:')
        this.emit('memoriaCalculada', memoriaLivre);
    }
}

module.exports = CalculoMemoria;