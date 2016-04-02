//
// ////// ***************************************************************
// ////// FIXTURES (generate data for the Documents collection)
// ////// ***************************************************************
// ////
if (Lists.find().count() === 0) {

 Lists.insert({
   name: "Inköpslista för festen",
   author: "Derpina",
   listIngredients: [{listIngredient: Ingredients.findOne().name}],
 });

 Lists.insert({
   name: "Handla inför lanet",
   author: "Kristina",
   listIngredients: [{listIngredient: Ingredients.findOne().name}],
 });

 Lists.insert({
   name: "Matlista",
   author: "Derpina",
   listIngredients: [{listIngredient: Ingredients.findOne().name},{listIngredient: Ingredients.findOne().name}],
 });

}
