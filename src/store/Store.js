import {configureStore} from "@reduxjs/toolkit";
import {loginSlice} from "../store/login_cart/loginSlice";




const store =configureStore({
    reducer :{
     user:loginSlice,
     

    }
})
export default store;