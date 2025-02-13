import taskReducer, { taskSlice } from "@/statemanagment/taskReducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer : {
        tasks : taskReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;