import { configureStore } from "@reduxjs/toolkit";
import { adminsApi } from "./services/admin";
import { authApi } from "./services/auth";

console.log(adminsApi)

const store = configureStore({
    reducer: {
        // [adminsApi.reducerPath]: adminsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (gDM) => gDM().concat(authApi.middleware)
});




export default store;


//middleware
//when we take data from db called query
//when we perform any update oon server called mutations