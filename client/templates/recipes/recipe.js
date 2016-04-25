Template.recipe.onRendered = function() {
};

Template.recipe.helpers({
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

Template.recipe.events ({
});
