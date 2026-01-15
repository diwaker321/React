import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:["pizza"]
    },
    reducers:{
        addItem:(state , action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state , action)=>{
            state.items.pop()
        },
        ClearItem : (state , action)=>{
            state.items.length = 0 //[]
        }
    }
})

export const {addItem , removeItem , ClearItem} = cartSlice.actions
export default cartSlice.reducer
