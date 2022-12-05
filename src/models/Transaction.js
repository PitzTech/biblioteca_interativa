const { Model } = require("objection");

class Transaction extends Model {

    static get tableName (){
        return "transactions"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"},
                status:{type:"integer"},
                date:{type:"date"}
            } 
        }
    }
}