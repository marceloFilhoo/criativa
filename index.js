const express = require('express')
const app = express()
const port = 5000

const paginasRoutes  = require('./paginas')

app.use(express.static('public'))

app.use('/', paginasRoutes)

app.listen(port, ()=>{
    console.log(`O servidor rodando na porta ${port}`)
})