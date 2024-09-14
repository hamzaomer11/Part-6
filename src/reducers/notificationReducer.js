import { createSlice } from "@reduxjs/toolkit"

const initialState = null;

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notificationMessage(state, action) {
            console.log(action.payload)
            return action.payload
        } 
    }
})

export const {notificationMessage} = notificationSlice.actions
export default notificationSlice.reducer