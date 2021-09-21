const getAdvise = (word) => {
    return fetch(`https://api.adviceslip.com/advice/search/${word}`).then(res => res.json())
}
export default getAdvise