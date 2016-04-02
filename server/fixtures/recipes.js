// //// ***************************************************************
// //// FIXTURES (generate data for the Documents collection)
// //// ***************************************************************
// //
if (Recipes.find().count() === 0) {


  Recipes.insert({
    name: "Stroganov",
    recipeIngredients: [{recipeIngredient: "korv",ingredientAmount: 1}],
  });
}
