export function Products() {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(result => result.json())
        .then(data => data.results)
        .catch()
        .finally()
}