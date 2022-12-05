const { Model } = require("objection");

class User extends Model {

    static get tableName (){
        return "users"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"}, 
                name:{type:"string", maxLength:51},
                email:{type:"string", maxLength:101},
                role:{type:"enum", options:["STAFF", "CUSTOMER" , "ADMINISTRATOR"]},
                cep:{type:"string", length:8},
                password:{type:"string", length: 64},
                address:{type:"string", maxLength: 128},
                 
            } 
        }
    }
}