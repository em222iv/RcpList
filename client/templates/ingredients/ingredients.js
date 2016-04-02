Template.ingredients.onRendered(() => {
    // var self = this;
    // self.autorun(function() {
    //     var latLng = Geolocation.latLng();
    //     if (latLng != null){
    //         Session.set('latLng', latLng);
    //         console.log(Session.get('latLng'));
    //     }
    // });
});
Template.ingredients.helpers({
  ingredients: () => {
    return Ingredients.find({},{sort: {createdAt: -1}});
  }
});

Template.ingredients.events({
  "click .add-ingredient": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    if(document.getElementById("name").value.length < 1){
      console.log('noh weh joseh');
      return;
    }
    console.log(document.getElementById("name").value);
    Meteor.call("addIngredient", document.getElementById("name").value);
  },
  "click .remove-ingredient": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeIngredient", this._id);
  },
  "click .add-ingredient-to-list": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("addIngredientToList", Lists.findOne()._id, event.currentTarget.id);
  },
});
