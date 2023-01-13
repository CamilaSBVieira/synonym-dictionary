import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filterWords } from "../../helperFunctions/filterWords";

const initialState = []

export const loadWords = createAsyncThunk('words/loadWords', async term => {
    const response = await fetch(`https://api.datamuse.com/words?ml=${term}`)
    const resJson = await response.json()
    let words = filterWords(resJson)
    return words
})

export const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        words: initialState,
        isLoading: false,
        hasError: false
    },
    reducers: {
        clearWords: (state, action) => {
            state.words = []
        }
    },
    extraReducers: {
        [loadWords.pending]: (state, action) => {
            state.isLoading = true
            state.hasError = false
        },
        [loadWords.fulfilled]: (state, action) => {
            state.words = action.payload
            state.isLoading = false
            state.hasError = false
        },
        [loadWords.rejected]: (state, action) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

export const { clearWords } = wordsSlice.actions
export const selectWords = state => state.words.words
export const selectIsLoading = state => state.words.isLoading
export const selectHasError = state => state.words.hasError
export default wordsSlice.reducer