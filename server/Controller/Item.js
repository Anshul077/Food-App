import data from "../model/DataSchema.js";

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
        console.log("body:",request.body)

      
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

