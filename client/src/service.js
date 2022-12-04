import axios from "axios"

const url = 'http://localhost:8000';

export const addItemCart =async (dishData)=>{
    try {
      console.log("data:",dishData)
        return await axios.post(`${url}/addCart`, dishData);
      } catch (error) {
        console.log("error calling cart api",error);
      }
    }