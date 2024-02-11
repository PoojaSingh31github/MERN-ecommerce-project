const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    image:{
        type : String,
        require: true
    },
    category: String,
    rating: Number,
    comments: [String]
});

const productModel = mongoose.model("productModel", productSchema)
module.exports=productModel;