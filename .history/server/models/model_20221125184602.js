const Schema = require('mongoose').Schema;

// categories => field => ['type', 'color']
const categories_model = new Schema({
    type: {type:String, default:"Investment"},
    color: {type:String, default:'#FCBE44'}
})
// transactions => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name:{type:String, default:"Anonymous"},
    type:{type:String, default:"Investment"},
    amount:{type:Number},
    date:{type:Date, default:Date.now}
})