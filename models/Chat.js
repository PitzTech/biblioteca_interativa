const { Model } = require("objection");

class Chat extends Model {

    static get tableName (){
        return "chat"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"},
                grade:{type:"integer"},
                theme:{type:"string"}
            } 
        }
    }
}