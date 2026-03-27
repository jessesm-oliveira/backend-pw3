    const users= require("../data/users")
    
    const findAll=() =>{
        return users
    }
    const create = (newUsers) =>{

        users.push(newUsers)
        return newUsers

    }

    

    const findById=(id) =>{


    //  for ( let i = 0; i <  users.length; i++){

    //         if ( users[i].id ==id ){
    //            return users[i]
    //         } 
    //     }
    //     return null

     return users.find(user => user.id ==id)
    }


    module.exports={
        findAll,
        create,
        findById,
       
    }