//19.11.2018

const express = require('express');
const users = require('./users.js')
const app = express();


/*endpoint
acessado pelo metodo get
.send mostra para o usuario a res
req: o que o usuario manda; res: o que manda pro usuário*/

app.get ('/', (req, res) => res.send('Hello World!'));
app.get('api/users', (req, res) => res.send([1, 2, 3]));
//app.get('api/users/:id', (req, res) => res.send(req.params));
//app.get('api/user/:id', (req, res) => res.send(req.query));
app.get('api/user/:id', (req, res) => {
    const foundUser = users.find(user => user.id === parseInt(req.params.id)); //para encontrar o usuario
    //res.send(foundUser); 
    if (!foundUser){
        return res.status(404).send('Deu merda');
    }
        res.send(foundUser);
});


app.listen(3000, () => console.log('Escutando na porta 3000...'));