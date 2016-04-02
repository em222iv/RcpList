Meteor.methods({
    addRecipe:function(name) {
        // Insert a list into the collection
        console.log(name);
        Recipes.insert({
            name: name,
            createdAt: new Date(),
        });
    },
    removeRecipe:function(id) {
        // Remove a list from the collection
        Recipes.remove(id);
    }

});
