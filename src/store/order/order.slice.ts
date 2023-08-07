import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get<IOrder[]>(
                `https://64cc90f32eafdcdc8519f554.mockapi.io/orders?search=${userId}`
            )
            console.log(response)
            console.log(response.data)
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

type OrderState = {
    order: IOrder[];
    isLoading: boolean;
    error: string;
}

const initialState : OrderState= {
    order: [],
    isLoading: false,
    error: ""
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
    }
})

export default orderSlice.reducer;