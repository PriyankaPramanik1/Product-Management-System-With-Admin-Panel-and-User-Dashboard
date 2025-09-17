const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: [String],
        required: true,
    }, 
    size: {
        type: [String],
        required: true,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    }
});

const ProductModel = mongoose.model('product', ProductSchema);
module.exports = ProductModel;
