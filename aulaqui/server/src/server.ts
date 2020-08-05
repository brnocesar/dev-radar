import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    console.log('acessou a rota');
    return response.json([{resposta: 'resposta'}]);
});

app.listen(3333);