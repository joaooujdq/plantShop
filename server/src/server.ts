import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagens de Usuarios');


});

app.listen(3333);