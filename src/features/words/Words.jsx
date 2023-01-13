import { useSelector } from "react-redux"
import { Word } from "../../components/Word"
import { selectHasError, selectIsLoading, selectWords } from "./wordsSlice"
import '../../assets/styles/words.css'


export function Words() {
    const words = useSelector(selectWords)
    const isLoading = useSelector(selectIsLoading)
    const hasError = useSelector(selectHasError)


    if(isLoading) {
        return <div>Loading...</div>
    }
    if(hasError) {
        return <div>Error fetching... Check if you spelled the word correctly</div>
    }


    return (
        <div className="words">
            {words.map(w => {
                return <Word key={w.id} word={w}/>
            })}
        </div>
    )
}