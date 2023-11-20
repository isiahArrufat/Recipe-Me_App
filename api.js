document.querySelector('.searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputValue = document.querySelector('#input').value.trim();
    
    if (inputValue !== '') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then((res) => res.json())
            .then((data) => {
                const main = document.querySelector("main");

                data.drinks.forEach(drink => {
                    console.log(drink);

                    const properties = extractProperties(drink, ['strImageSource', "strDrink", "strAlcoholic", 'strGlass', 'strInstructions']);
                    const drkIngredients = filterNullIngredients(drink);

                    main.innerHTML +=
                        `<article>
                            <img src=${properties.strImageSource} />
                            <h2>${properties.strDrink}</h2>
                            <p>Alcoholic/NonAlcoholic: ${properties.strAlcoholic} beverage.</p>
                            <ul>${drkIngredients.outerHTML}</ul>
                            <p>Served In: ${properties.strGlass}</p>
                            <p>${properties.strInstructions}</p>
                        </article>`;
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    } else {
        alert('Please enter a drink name.');
    }
});



 

//   const filterNullIngredients = (drink) => {
//     const ingredients = document.createElement("ul");
//     for(const key in drink){
//       if(key.includes("strIngredient") && drink[key]){
//         const keyForMeasurement = key.replace("strIngredient", "strMeasure")
//         // key is strIngredient1 -> secondKey = strMeasure1
//         // drink[key] -> Tequila, drink[secondKey] -> 1 1/2 oz 
//         console.log(drink[key], drink[keyForMeasurement])
//         const ingredient = document.createElement("li")
//         ingredient.textContent += `${drink[key]} ${drink[keyForMeasurement]}`
//         ingredients.append(ingredient)
//       }else if (drinksOnPage) {
//         drinksOnPage.append(ingredients)
//       }else {
//         console.log("Element with class 'drink-test' not found in the DOM");
//       }
//     }
//   }

