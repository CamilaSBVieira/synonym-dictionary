import '../assets/styles/word.css'

export function Word({ word }) {
    return (
        <h2 className='word'>{word.word}</h2>
    )
}