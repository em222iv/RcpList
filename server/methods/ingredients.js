Meteor.methods({
    addIngredient:((iName) => {
        // Insert a list into the collection
        Ingredients.insert({
            name: iName,
            createdAt: new Date(),
        });
    }),
    removeIngredient:((id) => {
        // Remove a list from the collection
        console.log(id);
        Ingredients.remove(id);
    }),
});
