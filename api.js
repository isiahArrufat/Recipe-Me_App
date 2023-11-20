
const drinksOnPage = document.querySelector(".drink-test");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const main = document.querySelector("main")
    data.drinks.forEach(drink => {
        
        console.log("Calling extractProperties");
      const properties = extractProperties(drink, ['strImageSource', "strDrink", "strAlcoholic", 'strGlass', 'strInstructions']);
    const drkIngredients = filterNullIngredients(drink)

        
        main.innerHTML +=
        `<article>
        <img src=${drink.strImageSource} />
        <h2>${drink.strDrink}</h2>
        <p>Alcholoic/NonAlchloic: ${drink.strAlcoholic} beverage.</p>
        <ul>${drkIngredients.outerHTML}</ul>
        <p> Served In: ${drink.strGlass}</p>
        <P>${drink.strInstructions}</P>
        </article>`

       
    })
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

