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
        let exist = await cart.findOne({ name: request.body.name});
        if(exist) {
            console.log(request.body)
            await cart.updateOne({ name: request.body.name},{$inc:{qty:1}});
            return response.status(200).json({ message: "added" })
        } else {
            console.log(request.body)

                const item = request.body;
                const newItem = new cart(item);
                await newItem.save();
                return response.status(200).json({ message: "added" })
        }
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

