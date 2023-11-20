// Helper function for button functionally 
document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { class: "page1", destination: "main.html" },
        { class: "page2", destination: "index.html" }
        // Add more buttons if needed
    ];

    buttons.forEach((button) => {
        const element = document.querySelector(`.${button.class}`);
        if (element) {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                window.location.href = button.destination;
            });
        } else {
            console.error(`Button with class '${button.class}' not found`);
        }
    });
});


window.extractProperties = (drink, propertyName) => {
  
  };
  
  window.filterNullIngredients = (drink) => {

  };
  

// my helper functions below 


// helper function to pull out list of ingredient and there measurements dynamically 
    window.filterNullIngredients = (drink) => {
    const ingredients = document.createElement("ul");
    for(const key in drink){
      if(key.includes("strIngredient") && drink[key]){
        const keyForMeasurement = key.replace("strIngredient", "strMeasure")
        // key is strIngredient1 -> secondKey = strMeasure1
        // drink[key] -> Tequila, drink[secondKey] -> 1 1/2 oz 
        // console.log(drink[key], drink[keyForMeasurement])
        const ingredient = document.createElement("li")
        ingredient.textContent += `${drink[key]} ${drink[keyForMeasurement]}`
        ingredients.append(ingredient)
      }else if (drinksOnPage) {
        drinksOnPage.append(ingredients)
      }else {
        console.log("Element with class 'drink-test' not found in the DOM");
      }
    }
    return ingredients.childNodes.length > 0 ? ingredients : null;
  }

//  my second helper function to excract the rest of the remaining properties.
   window.extractProperties = (drink, propertyNames) => {
    const extractedProperties = {};
    propertyNames.forEach((propertyName) => {
      if (drink.hasOwnProperty(propertyName)) {
        extractedProperties[propertyName] = drink[propertyName];
      }
    });
    return extractedProperties;
  };
    






