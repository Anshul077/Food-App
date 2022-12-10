import axios from "axios"

const url = 'http://localhost:8000';

export const addItemCart =async (dishData)=>{
    try {
        return await axios.post(`${url}/addCart`, dishData);
      } catch (error) {
        console.log("error calling cart api",error);
      }
    }

export const updateCartQty =async (details)=>{
    try {
        return await axios.post(`${url}/updateCart`, details);
      } catch (error) {
        console.log("error calling updateCart api",error);
      }
    }

export const deleteAllCartItem =async (name)=>{
    try {
      console.log(name)
        return await axios.post(`${url}/deleteCart`, name);
      } catch (error) {
        console.log("error calling delete cart api",error);
      }
    }