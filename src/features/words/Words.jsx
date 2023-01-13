import { useSelector } from "react-redux"
import { Word } from "../../components/Word"
import { selectHasError, selectIsLoading, selectWords } from "./wordsSlice"
import '../../assets/styles/words.css'
import '../../assets/styles/states.css'

export function Words() {
    const words = useSelector(selectWords)
    const isLoading = useSelector(selectIsLoading)
    const hasError = useSelector(selectHasError)


    if(isLoading) {
        return <div className="loading">Loading...</div>
    }
    if(hasError) {
        return <div className="error">Error fetching... Check if you spelled the word correctly</div>
    }


    return (
        <div className="words">
            {words.map(w => {
                return <Word key={w.id} word={w}/>
            })}
        </div>
    )
}