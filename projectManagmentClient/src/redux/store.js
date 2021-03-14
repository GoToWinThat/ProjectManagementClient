import { configureStore } from '@reduxjs/toolkit'
import  projectsReducer  from "./features/projectsSlice";

export default configureStore({
    reducer: {
        projects: projectsReducer
    }
})
