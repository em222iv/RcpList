// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish('ingredient', function(id) {
  return Ingredients.find(id);
});

// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('ingredients', function() {
  return Ingredients.find();
});
