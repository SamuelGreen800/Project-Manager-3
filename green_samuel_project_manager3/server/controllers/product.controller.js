const Product = require('../models/product.model.js');  


module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(allProducts => {
            console.log(allProducts); 
            res.json(allProducts);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}


module.exports.createProduct = (req, res) => {

    Product.create(req.body) 
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedPerson => res.json(updatedPerson))
    .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err=>res.json(err))
        
}