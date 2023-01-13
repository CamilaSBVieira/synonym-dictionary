import '../../assets/styles/suggestion.css'

export function Suggestions({ suggestion, onClick }) {
    return <div className="suggestion" onClick={onClick}>{suggestion}</div>
}