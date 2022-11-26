const model = require('../models/model');

// post: http://localhost:8080/api/categories
function create_Categories(req, res){
    // res.json("Get Request from Categories");
    const Create = new model.Categories({
        type:"Savings",
        color:'#1F3B5C', // dark
    });

    Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories ${err}`})
    })
}

// get: http://localhost:8080/api/categories

module.exports = {
    create_Categories
}