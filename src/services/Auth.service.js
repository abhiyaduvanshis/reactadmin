import axios from "axios";
const API_URL = "https://stage-api.bookmyinfluencers.com/api/v1/";

const login =(email,password)=>{
    return axios
    .post(API_URL + "login", {
        email,
        password,
    })
    .then((response) => {
        if(response.data.code==200 && response.data.payload.email!=''){
            localStorage.setItem('user',JSON.stringify(response.data.payload));
        }
        return response.data;
    });
}

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("user"));
}

const logout = () => {
    localStorage.removeItem("user");
    return 'logout';
};


const AuthService = {
    login,
    getCurrentUser,
    logout
}
  
export default AuthService;
