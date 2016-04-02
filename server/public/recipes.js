// LISTS INDEX
// -------------------------------------------------------
Meteor.publish('recipes', function() {
  return Recipes.find();
});

// LISTS SHOW
// -------------------------------------------------------
Meteor.publish("recipe", function(id){
  return Recipes.find({ _id:id});
});
