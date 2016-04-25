Template.lists.helpers({
  lists: () => {
    return Lists.find({},{sort: {createdAt: -1}});
  },
  // listIngredients: function(list){
  //   return Lists.find('Matlista').ingredientIds
  // }
});

Template.lists.events({
  "click .remove-list": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeList", event.currentTarget.id);
  },
  'input .list-title-update': (event) => {
      Meteor.call("updateListTitle", this._id, event.target.value);
  },
  'click .set-current-list': (event) => {
      Session.set('currentList',Lists.findOne(event.currentTarget.id));
  }
});
