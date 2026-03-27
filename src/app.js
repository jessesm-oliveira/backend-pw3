const express = require('express')
const userController= require("./controllers/userController")
const app = express()
app.get("/", (request, response)=> {
    response.send("Provérbios 16:3 - Consagre ao Senhor tudo o que você faz e os seus planos serão bem sucedidos-")
})

app.use(express.json())

app.post("/users",userController.createUser)

app.get("/users", userController.getAllUsers)

app.get("/users/:id", userController.getUserById)

module.exports = app