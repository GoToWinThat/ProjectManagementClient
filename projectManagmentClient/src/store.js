import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from "./reducers/projectsSlice";

export default configureStore({
    reducer: {
        projects: projectsReducer
    }
})
