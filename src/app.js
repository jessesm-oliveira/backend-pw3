const express = require('express')
const userController= require("./controllers/userController")
const app = express()
app.get("/", (request, response)=> {
    response.send("Provérbios 16:3 - Consagre ao Senhor tudo o que você faz e os seus planos serão bem sucedidos-")
})

app.use(express.json())

app.post("/users", (req, res) =>{
console.log(req.body)

 res.send("Testando")
})

app.get("/users", userController.getAllUsers)

module.exports = app