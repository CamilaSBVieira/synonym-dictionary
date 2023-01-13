import { configureStore } from '@reduxjs/toolkit'
import searchTermSlice from '../features/searchTerm/searchTermSlice'
import suggestionsSlice from '../features/suggestions/suggestionsSlice'
import wordsSlice from '../features/words/wordsSlice'

export default configureStore({
    reducer: {
        searchTerm: searchTermSlice,
        suggestions: suggestionsSlice,
        words: wordsSlice
    }
})