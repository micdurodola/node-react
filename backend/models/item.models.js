const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title:{type:String,required:true,minlength:3,unique:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    discounted_price:{type:Number},
    image:{type:String}},
    {timestamps:true
});
const Item = mongoose.model('Item',itemSchema);
module.exports = Item;
