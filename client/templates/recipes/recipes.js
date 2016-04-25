Template.recipes.helpers({
  recipes: () => {
    return Recipes.find({},{sort: {createdAt: -1}});
  },
  Lists: () => {
      return Lists.find({}, {
          sort: {
              createdAt: -1
          }
      });
  },
  // listIngredients: function(list){
  //   return Lists.find('Matlista').ingredientIds
  // }
});

Template.recipes.events({
  "click .add-recipe": (event) => {
    // Prevent default browser form submit
    if(document.getElementById("name").value.length < 1){
      console.log('noh weh joseh');
      return;
    }
    event.preventDefault();
    console.log(document.getElementById("name").value);
    Meteor.call("addRecipe", document.getElementById("name").value);
  },
  "click .remove-recipe": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeRecipe", event.currentTarget.id);
  },
});
