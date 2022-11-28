import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import 

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
    }
})