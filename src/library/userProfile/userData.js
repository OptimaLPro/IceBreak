import axios from "axios";

export const getUserData = async () =>{
    try {
        const token = localStorage.getItem("accessToken");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("https://icebreak-backend.onrender.com/users/userData");
        console.log(response.data["user"]["firstName"]);
        return response.data["user"];
    } catch (error) {
        console.error(error);
        throw error; 
    }
};
