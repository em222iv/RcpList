Meteor.methods({
    addList: function(name) {
        // Insert a list into the collection
        if (name.length < 1) {
            console.log('Noh Weh Joseh');
            return;
        }
        Lists.insert({
            name: name,
            author: "Author",
            listIngredients: [],
            createdAt: new Date() // current time
        });
    },
    removeList: function(id) {
        // Remove a list into the collection
        Lists.remove(id);
    },
    updateListTitle: function(id, title) {
        // Update a list into the collection
        if (title.length <= 25) {
            Lists.update({
                _id: id
            }, {
                $set: {
                    name: name
                }
            });
        }
    },
    increaseIngredientAmount: function(id, ingredient, amount) {

        Lists.update({
            _id: id,
            'listIngredients.listIngredient': ingredient
        }, {
            $set: {
                'listIngredients.$.ingredientAmount': amount
            }
        });
    },
    addIngredientToList: function(id, ingredient) {

        return Lists.update({
            _id: id
        }, {
            $push: {
                'listIngredients': {
                    listIngredient: ingredient,
                    ingredientAmount: 1
                }
            }
        });
    },
    removeIngredientFromList: function(id, ingredient) {
        // Update a list into the collection
        Lists.update({
            _id: id
        }, {
            $pull: {
                'listIngredients': {
                    listIngredient: ingredient
                }
            }
        });
    }
});
