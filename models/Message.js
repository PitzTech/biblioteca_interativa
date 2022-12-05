const { Model } = require("objection");

class Message extends Model {

    static get tableName (){
        return "messages"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"},
                sentDate:{type:"date"},
                massage:{type:"string", maxLenght:300},
            } 
        }
    }
}













