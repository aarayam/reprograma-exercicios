//          AULA 14.11

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/reprograma') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', () => {
    console.log('Página carregada');
});

// Ouvindo um evento pré-existente do módulo
server.listen(3000);
console.log('Escutando na porta 3000...')

// res.write : o que será "mostrado" na tela

//npm é como cdm mas os pacotes estão na nuvem

//no comando quando usa -- é para colocar a palavra inteira e somente um - é a palavra abreviada

//instalando lo dash : npm i(nstall) -g(lobal) npm
