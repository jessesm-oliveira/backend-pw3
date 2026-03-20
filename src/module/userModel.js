    const users= require("../data/users")
    const findAll=() =>{
        return users
    }
    const create = (newUsers) =>{

        users.push(newUsers)
        return newUsers

    }


    module.exports={
        findAll,
        create
    }