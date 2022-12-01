import data from "../model/DataSchema.js";

export const getDataItem = async (request, response) => {
    try {
        console.log("hello")
        // console.log("category: ",request.body.category)
        const products = await data.find({});
        console.log(products)
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

