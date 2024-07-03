import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface counterState {
    value: number;
}
const initialState: counterState = {
    value:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        add : (state) =>{
            state.value +=1;
        },
        subtract: (state) => {
            state.value -=1;
        },
        addByValue: (state, action:PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export const { add, subtract, addByValue } = counterSlice.actions;
export default counterSlice.reducer;