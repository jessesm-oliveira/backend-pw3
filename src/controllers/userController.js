 const userModel= require("../module/userModel")

 const getAllUsers=(req, res)=> {

    const users= userModel.findAll()
    return res.send(users)
       
 }
const createUser=  (req, res) =>{

const nome= req.body.nome
const idade= req.body.idade

const newUsers= {

    id : Date.now(),
    nome : nome,
    idade: idade
}


 const createdUser =userModel.create(newUsers)


 res.status(201).json(createdUser)
}

 module.exports = {
    getAllUsers,
    createUser
}
 
