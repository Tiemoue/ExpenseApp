import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import { apiS}

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
    }
})