import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import { a}

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
    }
})