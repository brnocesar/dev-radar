const expressx = require('express')
const mongoosx = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = expressx()

mongoosx.connect('mongodb+srv://batatinha:batatinha@cluster0-czshj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(expressx.json())
app.use(routes)





app.listen(3333)