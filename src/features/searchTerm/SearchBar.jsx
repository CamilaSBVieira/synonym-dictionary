import { useDispatch, useSelector } from 'react-redux'
import { Suggestions } from '../suggestions/Suggestions'
import { clearSuggestions, queryByChar, selectSuggestions } from '../suggestions/suggestionsSlice'
import { clearWords, loadWords } from '../words/wordsSlice'
import { addSearchTerm, clearSearchTerm, selectSearchTerm } from './searchTermSlice'
import '../../assets/styles/searchBar.css'

export function SearchBar() {

    const searchTerm = useSelector(selectSearchTerm)
    const suggestions = useSelector(selectSuggestions)
    const dispatch = useDispatch()

    const onChangeHandler = e => {
        dispatch(addSearchTerm(e.target.value))
        dispatch(queryByChar(e.target.value))
    }
    const onClearHandler = (e) => {
        e.preventDefault()
        dispatch(clearSearchTerm())
        dispatch(clearWords())
    }

    const onClickSuggestion = (term) => {
        dispatch(addSearchTerm(term))
        dispatch(clearSuggestions())
        dispatch(clearWords())
    }

    const onClickInput = () => {
        dispatch(queryByChar(searchTerm))
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(loadWords(searchTerm))
        dispatch(clearSuggestions())
    }


    return (
        <form className='searchBar'>
            <div>
                <input className='searchBar_input' type='text' name='searchTerm' id='searchTerm' value={searchTerm} onChange={onChangeHandler} onClick={onClickInput} />
                <button className='searchBar_clearButton' onClick={onClearHandler}>X</button>
                <input className='searchBar_searchButton' type="submit" onClick={onSubmit} />
            </div>
            <div className='suggestions'>
                {suggestions.map(s => <Suggestions key={s.id} suggestion={s.word} onClick={() => onClickSuggestion(s.word)} />)}
            </div>
        </form>
    )
}