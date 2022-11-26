const model = require('../models/model');

// post: http://localhost:8080/api/categories
async function create_Categories(req, res){
    // res.json("Get Request from Categories");
    const Create = new model.Categories({
        type:"Transaction",
        color:'red', // dark
    });

    await Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message:`Error while creating categories ${err}`})
    })
}

// get: http://localhost:8080/api/categories
async function get_Categories(req, res){
    let data = await model.Categories.find({});

    let filter = await data.map(v => Object.assign({}, {type:v.type, color:v.color}));
    return res.json(filter);
}

// post: http://localhost:8080/api/transaction
async function create_Transaction(req, res){
    if (!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let {name, type, amount} = req.body;

    const create = await new model.Transaction(
        {
            name,
            type,
            amount,
            date:new Date()
        }
    );

    create.save((err) => {
        if (!err) return res.json(create);
        return res.status(400).json({message: `Error while creating transaction ${err}`});
    })
}

// get: http://localhost:8080/api/transaction
async function get_Transaction(req, res){
   let data = await model.Transaction.find({});
   return res.json(data);
}

// delete: http://localhost:8080/api/transaction
async function delete_Transaction(req, res){
    if (!req.body) res.statues(400).json({message: "Request body not found"});
    await model.Transaction.deleteOne(req.body, (err) => {
        if (!err) res.json("Record Deleted...!")   
    }).clone().catch((err)=>{res.json("Error while deleting Transaction record")});
}

// get: http://localhost:8080/api/labels
async function get_Labels(req, res){
    model.Transaction.aggregate([
        {
            $lookup:{
                from:"categories",
                localField:"type",
                foreignField:"type",
                as:"categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({}, {_id:v._id, name:v.name, type:v.type, amount:v.amount, color:v.color}))
        res.json(result);
    }).catch(error => {
        res.status(400).json("Lookup Collection Error");
    })
}



module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels,
}