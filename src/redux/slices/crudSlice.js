import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: "task",
    initialState: { tasks: [] },
    reducers: {
        addTask: (state, action) => {
            action.payload.id = new Date().getTime();

            state.tasks.push(action.payload)
        }
    }
})

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer