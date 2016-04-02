Meteor.methods({
    addIngredient:function(iName) {
        // Insert a list into the collection
        console.log(iName);
        Ingredients.insert({
            name: iName,
            createdAt: new Date(),
        });
    },
    removeIngredient:function(id) {
        // Remove a list from the collection
        Ingredients.remove(id);
    }

});
