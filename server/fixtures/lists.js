//
// ////// ***************************************************************
// ////// FIXTURES (generate data for the Documents collection)
// ////// ***************************************************************
// ////
if (Lists.find().count() === 0) {

  let lists = [];
 Lists.insert({
   name: "Inköpslista för festen",
   author: "Derpina",
   listIngredients: [{listIngredient: Ingredients.findOne().name, ingredientAmount:1}],
 });

 Lists.insert({
   name: "Matlista",
   author: "Kristina",
   listIngredients: [{listIngredient: Ingredients.findOne().name,ingredientAmount:1}],
 });

}
