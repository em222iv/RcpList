// //// ***************************************************************
// //// FIXTURES (generate data for the Documents collection)
// //// ***************************************************************
// //
if (Ingredients.find().count() === 0) {

  Ingredients.insert({name: "Mjölk",measurement: "KG"},{listIds: [{id: "Matlista"}]});

}
