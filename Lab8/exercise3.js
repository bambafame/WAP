"use strict";

(async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    const names = data.recipes.map((r) => r.name);
    console.log("Recipes:");
    console.log(names);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
})();
