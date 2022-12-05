const { Model } = require("objection");

class Event extends Model {

    static get tableName (){
        return "events"
    }

    static get jsonSchema() {
        return {
            properties:{
                id:{type:"integer"},
                startDate:{type:"date"},
                endDate:{type:"date"},
            } 
        }
    }
}