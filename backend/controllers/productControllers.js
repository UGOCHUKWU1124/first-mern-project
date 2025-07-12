import mongoose from "mongoose";//communicate to the database
import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    }
    catch (error){
        console.log("Error in fetching products:", error.message);
        res.status(500).json({success:false, message:"Internal server error"});
    }
}

export const createProducts = async (req, res) => {
     const product = req.body; //user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please fill all the fields"});
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({success: true, data:newProduct});
    }
    catch(error){
        console.log("Error in creating product:",error.message);
        res.status(500).json({success: false, message: "Internal server error"});
    }

}

export const updateProducts = async (req, res) => {
    const { id } = req.params;

    const product = req.body; //name, price, image

    //if a user passes an invalid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"});
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    }
    catch(error){
        res.status(500).json({success: false, message: "server error"});
    }
}

export const deleteProducts = async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);

    //if a user passes an invalid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"});
    }

    try{
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,  data: deletedProduct});
    }
    catch (error){
        console.log("Error in deleting product:", error.message);
        res.status(500).json({success:false, message:"server error"});
    }
}