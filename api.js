
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
fetch(apiUrl)
.then((res) => res.json())
.then((data) => console.log(data))
})