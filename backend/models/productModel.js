import mongoose from "mongoose";

const productSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},
{
    timestamps: true, //createdAt and updatedAt
}
);

const product = mongoose.model("product", productSchema);

export default product;//will be used in different files eg productController.js