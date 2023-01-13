
export function filterWords(array) {
    let words = []
    for(let i = 0; i < 10; i++) {
        words.push({id: i, word: array[i].word})
    }
    return words
}