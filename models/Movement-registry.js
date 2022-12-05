const { Model } = require("objection");

class MovementRegistry extends Model {

    static get tableName (){
        return "movement_registries"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"}, 
                type:{type:"enum", options:["EXIT", "ENTRY"]},
                date:{type:"date"}
            } 
        }
    }
}