const model = require('../models/model');

// get categories
function create_Categories(req, res){
    // res.json("Get Request from Categories");
    const Create = new model.Categories({
        type:"Savings",
        color:'#1F3B5'
    });
}

module.exports = {
    create_Categories
}