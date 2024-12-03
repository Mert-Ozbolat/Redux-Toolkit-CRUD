import { createSlice } from "@reduxjs/toolkit";
import { initialTasks } from "../../constants";
import { v4 } from "uuid";

const taskSlice = createSlice({
    name: "task",
    initialState: { tasks: initialTasks },
    reducers: {
        addTask: (state, action) => {
            action.payload.id = v4();
            state.tasks.push(action.payload);
        },

        deleteTask: (state, action) => {
            const i = state.tasks.findIndex((i) => i.id === action.payload);
            state.tasks.splice(i, 1);
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;