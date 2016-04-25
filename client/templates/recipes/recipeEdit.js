Template.recipeEdit.onRendered = function() {
};

Template.recipeEdit.helpers({
    recipe: function(){
        return Recipes.findOne();
    },
    ingredients: () => {
        return Ingredients.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }
});

Template.recipeEdit.events ({
  "click .add-ingredient-to-recipe": (event) => {
      let recipe = Recipes.findOne();
      console.log(recipe);
      let amount = 0;
      let exists = recipe.recipeIngredients.filter((ingredient) => {
          if (ingredient.recipeIngredient === event.currentTarget.id) {
              amount = ingredient.ingredientAmount;
              return true;
          }
          return false;
      });
      console.log('exsts', exists.length)
      if (exists.length >= 1) {
          Meteor.call("increaseRecipeIngredientAmount", recipe._id, event.currentTarget.id, amount + 1);
      } else {
          Meteor.call("addIngredientToRecipe", recipe._id, event.currentTarget.id);
      }
  },
});
