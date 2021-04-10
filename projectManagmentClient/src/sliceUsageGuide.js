import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectAll, fetchProjects, fetchProjectById } from './reducers/projectsSlice'

export default function Guide() {

    const dispatch = useDispatch()
    const projects = useSelector(selectAll)
    const projectStatus = useSelector(state => state.projects.status)

    useEffect(() => {
        if (projectStatus === 'IDLE') {
            // checking status is unnecesary because we are going to call this function only once, but it shows how to look up status of api calls
            dispatch(fetchProjects())
            dispatch(fetchProjectById(1))
        }
        // call only once, when the component first mounts
    }, [projectStatus, dispatch])

    //after the call has been successfully finished, the selector for projects (which points to item collection from redux state) is populated with projects
    console.log(projects)
}