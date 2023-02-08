import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)

        },
        removeitem:(state, action)=>{
            state.items.pop()
        },

        cartCreate:(state)=>{
            state.items=[]
        }
    }
})
export const {addItem, removeitem, cartCreate}=Cartslice.actions;

export default Cartslice.reducer