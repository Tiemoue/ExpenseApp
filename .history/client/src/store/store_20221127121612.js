import { configureStore } from '@reduxjs/toolkit'
import { expenseSlice } from './reducer'
import { api}

export const store = configureStore({
    reducer: {
        expense: expenseSlice,
    }
})