import express, { request, response } from 'express';

const app = express();

app.use(express.json());

// Conceitos essenciais

/* Rota: Endereço completo da requisição
 * Recurso: Qual entidade/funcionalidade estamos acessando do sistema
 */

/* # métodos HTTP
 * GET: Buscar uma ou mais informações do back-end
 * POST: Criar uma nova informação no back-end
 * PUT: Atualizar informação existente no back-end
 * DELETE: Remover informação do back-end
 */

/* # as rotas devem ser montadas de forma que sejam semânticas: 
 * POST http://localhost:3333/users = Criar um usuário
 * GET http://localhost:3333/users = Listar usuários
 * GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5
 */

/* # Parâmetros
 * Request Param: Rarâmetros vindos na própia rota que identificam um recurso
 * Query Param: Rarâmetros vindos na própia rota, geralmente opcionais, usados para filtros, paginação
 * Request Body: Parâmetros para ciração/atualização de informações
 */

/* # Query Builder: Abstração para escrever queries SQL independente do Banco
 * SELECT * FROM users WHERE name='Bruno';
 * knex('users').where('name', 'Bruno').select('*');
 */

const users = [
    'Bruno',    // 0
    'Bruna',    // 1
    'Breno',    // 2
    'Brisa'     // 3
];

app.get('/users', (request, response) => {

    const search = String(request.query.search); // gambiarrazinha

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {

    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
})

app.listen(3333);