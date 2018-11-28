/*
stdin -> input
stdout -> output
*/


const readline = require('readline');
const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


io.on('line', line => {
    console.log('Nova linha');
});