import data from "../model/DataSchema.js";
import cart from "../model/CartSchema.js";

export const getDataItem = async (request, response) => {
    try {
        const products = await data.find({});
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
export const addItemToCart = async (request, response) => {
    try {
        console.log(request.body)
        let exist = await cart.findOne({ name: request.body.name});
        if(exist) {
            console.log("hello if")
            await cart.UpdateOne({ name: request.body.name},{$set:{qty:qty+1}});
            return response.status(200).json("Item added to cart");
        } else {
            console.log("hello else")
            
                const item = request.body;
                const newItem = new cart(item);
                await newItem.save();
                return response.status(200).json("Item added to cart");s
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

