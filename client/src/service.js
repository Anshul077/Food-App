import axios from "axios"

const url = 'http://localhost:8000';

export const addItemCart =async (dishData)=>{
    try {
        return await axios.post(`${url}/addCart`, dishData);
      } catch (error) {
        console.log("error calling wishlist api",error.response.dishData);
      }
    }