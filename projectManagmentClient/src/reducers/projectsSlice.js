import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { statusTypes } from '../lib/constants'
import request from '../services/request'



const initialState = {
    items: [],
    status: statusTypes.IDLE,
    error: null
}
export const fetchProjects = createAsyncThunk('projects/fetchAll', async () => {
    return request({
        method: 'get',
        url: 'Projects',
    })
})

export const fetchProjectById = createAsyncThunk('projects/fetchById', async (projectId) => {
    return request({
        method: 'get',
        url: `Projects/${projectId}`,

    })
})
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProjects.pending]: (state, action) => {
            state.status = statusTypes.LOADING
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.status = statusTypes.SUCCEEDED
            state.items = action.payload.projectList
        },
        [fetchProjects.rejected]: (state, action) => {
            state.status = statusTypes.FAILED
            state.error = action.payload
        }
    }
})

export const selectAll = state => state.projects.items
export default projectsSlice.reducer