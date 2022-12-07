import axios from "axios"

const url = 'http://localhost:8000';

export const addItemCart =async (dishData)=>{
    try {
        return await axios.post(`${url}/addCart`, dishData);
      } catch (error) {
        console.log("error calling cart api",error);
      }
    }

export const updateCartQty =async (qty)=>{
    try {
      console.log("data:",qty)
        return await axios.post(`${url}/updateCart`, qty);
      } catch (error) {
        console.log("error calling updateCart api",error);
      }
    }