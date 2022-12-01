import data from "../model/DataSchema.js";

export const getDataItem = async (request, response) => {
    try {
        console.log(request.body)
        const products = await data.find({});
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

