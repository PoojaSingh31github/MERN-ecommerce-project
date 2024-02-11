const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    product:{
        type : mongoose.Schema.Types.ObjectId,
        require: true
    }
})

exports.Category = mongoose.model('CategoryModel', categorySchema);
