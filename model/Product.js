const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, min:[0, 'wrong min price'],max:[1000,'wrong max price'] },
    discountPercentage: { type: Number, min: [1, 'wrong min discount'], max: [99, 'wrong max discount'] },
    rating: { type: Number, min: [1, 'wrong min rating'], max: [5, 'wrong max rating'],default: 0 },
    stock: { type: Number, min: [0, 'wrong min stock'],default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thunmbnail: { type: String,required: true},
    images: { type: [String],required: true },
    deleted: { type: Boolean, required: false }
    });



exports.Product = mongoose.model('Product', productSchema);