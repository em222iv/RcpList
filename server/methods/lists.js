Meteor.methods({
    addList: function(name) {
        // Insert a list into the collection
        if (name.length < 1) {
            console.log('Noh Weh Joseh');
            return;
        }
        let list = {
            _id: Random.id(),
            name: name,
            author: Meteor.user().username,
            listIngredients: [],
            createdAt: new Date() // current time
        };

        Meteor.users.update(Meteor.userId(), {
            $push: {
                'profile.lists': list
            }
        });

    },
    removeList: function(id) {
        // Remove a list into the collection
        // Lists.remove(id);
        // var list;
        //
        Meteor.users.update(Meteor.userId(), {
            $pull: {
                'profile.lists': {
                    '_id': id
                }
            }
        });
        console.log(list)
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

        // return Lists.update({
        //     _id: id
        // }, {
        //     $push: {
        //         'listIngredients': {
        //             listIngredient: ingredient,
        //             ingredientAmount: 1
        //         }
        //     }
        // });
        if (ingredient.length < 1) {
            console.log('Noh Weh Joseh');
            return;
        }

        Meteor.users.update(
          {'_id': Meteor.userId(),'list.listIngredients'}
        );
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
    },
    UsercurrentList: function(list) {
        // Update a list into the collection
        return Meteor.users.update(Meteor.userId(), {
            $set: {
                'profile.currentList': list
            }
        });
    }
});
