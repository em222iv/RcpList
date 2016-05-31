Meteor.methods({
    addRecipe:function(name) {
        // Insert a list into the collection
        console.log(name);
        Recipes.insert({
            name: name,
            recipeIngredients: [],
            createdAt: new Date(),
        });
    },
    removeRecipe:function(id) {
        // Remove a list from the collection
        Recipes.remove(id);
    },
    increaseRecipeIngredientAmount: function(id, ingredient, amount) {

        Recipes.update({
            _id: id,
            'recipeIngredients.recipeIngredient': ingredient
        }, {
            $set: {
                'recipeIngredients.$.ingredientAmount': amount
            }
        });
    },
    addIngredientToRecipe: function(id, ingredient) {
        Recipes.update({
            _id: id
        }, {
            $push: {
                'recipeIngredients': {
                    recipeIngredient: ingredient,
                    ingredientAmount: 1
                }
            }
        });
    },
    removeIngredientFromRecipe: function(id, ingredient) {
        // Update a list into the collection
        Recipes.update({
            _id: id
        }, {
            $pull: {
                'recipeIngredients': {
                    recipeIngredient: ingredient
                }
            }
        });
    }

});
