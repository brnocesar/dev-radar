const expressx = require('express')
const mongoosx = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')

const app = expressx()
const server = http.Server(app)

mongoosx.connect('mongodb+srv://batatinha:batatinha@cluster0-czshj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(expressx.json())
app.use(routes)

server.listen(3333)
