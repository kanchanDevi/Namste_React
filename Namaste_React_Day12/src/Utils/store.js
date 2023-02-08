const { configureStore } = require("@reduxjs/toolkit");
import Cartslice from "./Cartslice";
const store=configureStore({

    reducer:{
        cart:Cartslice
    }
})

export default store