const router = require('express').Router();
let Item = require('../models/item.models');

router.route("/").get(async (req,res) => {
    await Item.find()
        .then(items =>res.json(items))
        .catch(err =>res.status(400).json('Error :' + err));

});

router.route("/:id").get((req,res) => {
    const productId = req.params.id;
    Item.findById(productId)
        .then(item =>res.json(item))
        .catch(err =>res.status(400).json('Error :' + err));

});

router.route("/add").post(async(req,res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const discounted_price = req.body.discounted_price;
    const image = req.body.image;

    const newItem = new Item(
        {title,        
        description,
        price,
        discounted_price,
        image,
    });
    await newItem.save()
        .then(()=> res.json('New item added'))
        .catch(err =>res.status(400).json('Error :' + err));
    

});

module.exports = router;
