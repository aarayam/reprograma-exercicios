const express = require('express');
const postits = require('./postits.js');
const app = express();
const Joi = require('joi');
const schema = { titulo: Joi.required(), texto: Joi.required() }
app.use(express.json());

app.get('/api/postits', (req, res) => res.send(postits));

app.post('/api/postits/cadastrar', (req, res) => {
    const id = Math.max(...postits.map(postit => postit.id)) + 1;

    const validation = Joi.validate(req.body, schema);

    const cadastraPostit = {
        id,
        titulo: req.body.titulo,
        texto: req.body.texto
    }

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }
    postits.push(cadastraPostit);
    res.send(cadastraPostit);
})

app.put('/api/postits/:id', (req, res) => {
    const idPostit = postits.find(postit => postit.id === parseInt(req.params.id));
    const validation = Joi.validate(req.body, schema);

    if(validation.error){
        return res.status(400).send(validation.error.details[0].message);    
    }

      if (!idPostit) {
        return res.status(404).send('O postit não existe');
    }

    idPostit.titulo = req.body.titulo;
    idPostit.texto = req.body.texto;
    res.send(idPostit);
})

app.delete('/api/postits/:id', (req, res) => {
    const idPostit = postits.find(postit => postit.id === parseInt(req.params.id));
    const index = postits.indexOf(idPostit);
    if (!idPostit) {
        return res.status(404).send('O postit não existe');
    }

    postits.splice(index, 1)
    res.send(idPostit);
})

app.listen(3000, () => console.log('Ouvindo na porta 3000...'));