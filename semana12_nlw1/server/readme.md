# API (_back-end_)

**Importante**: Todos os comandos listados abaixo devem ser rodados dentro desta pasta (`/repo/semana12_nlw1/server`).

Após clonar o repositório você deve instalar as dependências do projeto:
```
$ npm install
```
Em seguida o Banco pode ser criado, primeiro rodando as migrations:
```
$ npm run migrate
```
e depois os _seeders_:
```
$ npm run seed
```
Por fim, (para "começar") falta levantar o servidor de desenvolvimento que está rodando na porta [3333](http://localhost:3333):
```
$ npm run dev
```


## Comando úteis
- Criar uma _migration_:
```
$ npx knex migrate:make `migration_name` -x ts
```

## Rotas
- Listar items coletados
- Cadastrar um ponto de coleta
- Apresentar um ponto de coleta point
- Listar pontos de coleta, com filtros
