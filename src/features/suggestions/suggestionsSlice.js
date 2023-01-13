import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { filterWords } from "../../helperFunctions/filterWords"

const initialState = []

export const queryByChar = createAsyncThunk('words/queryByChar', async char => {
    if(char === '') {
        return []
    }
    const response = await fetch(`https://api.datamuse.com/sug?s=${char}`)
    const resJson = await response.json()
    const words = filterWords(resJson)
    return words
})

export const suggestionsSlice = createSlice({
    name: 'suggestions',
    initialState: initialState,
    reducers: {
        clearSuggestions: (state, action) => {
            return []
        }
    },
    extraReducers: {
        [queryByChar.fulfilled]: (state, action) => {
            return action.payload
        }
    }
})

export const { clearSuggestions } = suggestionsSlice.actions
export const selectSuggestions = state => state.suggestions
export default suggestionsSlice.reducer