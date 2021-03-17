import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', description: 'Test description', isActive: true },
    { id: '2', description: 'Test description 2', isActive: false }
]

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        projectAdded(state, action) {
            state.push(action.payload)
        },
        projectUpdated(state, action) {
            const { id, description, isActive } = action.payload
            const existingProject = state.find(project => project.id === id)
            if (existingProject) {
                existingProject.description = description
                existingProject.isActive = isActive
            }
        }
    }
})
export const { projectAdded, projectUpdated } = projectsSlice.actions

export default projectsSlice.reducer