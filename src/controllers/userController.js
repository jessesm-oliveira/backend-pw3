 const userModel= require("../module/userModel")

 const getAllUsers=(req, res)=> {

    const users= userModel.findAll()
    return res.send(users)
       
 }
 module.exports = {
    getAllUsers
}
 
