const Schema = require('mongoose').Schema;

// categories => field => ['type', 'color']
const categories_model = new Schema({
    type: {type: String, default:"Investemm"}
})
// transactions => field =>