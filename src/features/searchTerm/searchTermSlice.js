import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: initialState,
    reducers: {
        addSearchTerm: (state, action) => {
            return action.payload
        },
        clearSearchTerm: (state, action) => {
            return ''
        }
    }
})

export const selectSearchTerm = state => state.searchTerm

export const { addSearchTerm, clearSearchTerm } = searchTermSlice.actions

export default searchTermSlice.reducer