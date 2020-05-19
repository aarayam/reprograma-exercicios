const readline = require('readline')
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numeroSecreto = Math.floor(Math.random() * 100 * 1)

io.setPrompt('Adivinhe o número! (0 a 100): ');
io.prompt()
io.on('line', function(palpite) {

    let numPalpite = parseInt(palpite);

    if (numPalpite > numeroSecreto){
        console.log("ERROU! O NÚMERO É MENOR");
    }
    else if (numPalpite < numeroSecreto) {
        console.log("ERROU! O NÚMERO É MAIOR");
    }
    else {
        console.log("ACERTOU!");
        process.exit(0)
    }
})