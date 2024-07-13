const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

// Create Order - /api/v1/order
exports.createOrder = async (req,res,next) => {

    try{
        const cartItems = req.body;
        const amount = Number(cartItems.reduce((acc,item) => ( acc + item.product.price * item.qty), 0)).toFixed(2);
        const status = 'pending';

        const order = await orderModel.create({cartItems, amount, status})

        // Updating Product Stock
        cartItems.forEach( async (item) => {
            const product = await productModel.findById(item.product._id);
            product.stock = Number(product.stock) - item.qty;
            await product.save();
        });

        res.json(
            {
                success : true,
                order,
            }
        )
    } catch(error){
        res.json(
            {
                success : false,
                message : "Oops, Unable to Place Order",
                error,
            }
        )
    }
}