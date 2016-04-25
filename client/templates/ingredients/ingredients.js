Template.ingredients.onRendered(() => {
    // var self = this;
    // self.autorun(function() {∏
    //     var latLng = Geolocation.latLng();
    //     if (latLng != null){
    //         Session.set('latLng', latLng);
    //         console.log(Session.get('latLng'));
    //     }
    // })

});
Template.ingredients.helpers({
    ingredients: () => {
        return Ingredients.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }
});

Template.ingredients.events({
    "click .remove-ingredient": (event) => {
        console.log(event.currentTarget.id);
        Meteor.call("removeIngredient",event.currentTarget.id);

    },

    "click .add-ingredient-to-list": (event) => {
        let amount = 0;
        let exists = Session.get('currentList').listIngredients.filter((ingredient) => {
            if (ingredient.listIngredient === event.currentTarget.id) {
                amount = ingredient.ingredientAmount;
                return true;
            }
            return false;
        });
        if (exists.length >= 1) {
            Meteor.call("increaseIngredientAmount", Session.get('currentList')._id, event.currentTarget.id, amount + 1);
        } else {
            Meteor.call("addIngredientToList", Session.get('currentList')._id, event.currentTarget.id);
        }
    },
});
