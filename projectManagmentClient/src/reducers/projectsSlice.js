import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { statusTypes } from '../lib/constants'
import request from '../services/request'




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
    initialState: {
        items: [],
        status: statusTypes.IDLE,
        error: null
    },
    extraReducers: {
        [fetchProjects.pending]: (state) => {
            state.status = statusTypes.LOADING
        },
        [fetchProjects.fulfilled]: (state, action) => {
            state.status = statusTypes.SUCCEEDED
            state.items = action.payload.projectList
        },
        [fetchProjects.rejected]: (state, action) => {
            state.status = statusTypes.FAILED
            state.error = action.payload
        },
        [fetchProjectById.pending]: (state) => {
            state.status = statusTypes.LOADING
        },
        [fetchProjectById.fulfilled]: (state, action) => {
            state.status = statusTypes.SUCCEEDED
            if (!state.items.some(p => p.id === action.payload.id)) {
                state.items.push(action.payload)
            }
        },
        [fetchProjectById.rejected]: (state, action) => {
            state.status = statusTypes.FAILED
            state.error = action.payload
        },

    }
})

export const selectAll = state => state.projects.items
export default projectsSlice.reducer