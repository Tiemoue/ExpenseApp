import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import { apiSlice } from 

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
    }
})