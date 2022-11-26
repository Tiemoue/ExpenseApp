const Schema = require('mongoose').Schema;

// categories => field => ['type', 'color']
const categories_model = new Schema({
    type: {type: String, default:"Investment"},
    color: {type: String, default: '#FCBE44'}
})
// transactions => field =>