import {configureStore} from "@reduxjs/toolkit";
import recipeSlice from "./recipeSlice";
const recipieStore = configureStore({
    reducer:{
        recipieReducer : recipeSlice
    }
})
export default recipieStore