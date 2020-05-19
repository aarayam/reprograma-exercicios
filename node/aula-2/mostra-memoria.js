const CalculoMemoria = require('./calculo-memoria.js')
const calculoMemoria = new CalculoMemoria();
7
calculoMemoria.on('memoriaCalculada', memorialivre => {
    console.log(`A memória livre é de ${memorialivre}",`)
})

calculoMemoria.enviar()