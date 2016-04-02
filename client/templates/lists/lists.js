Template.lists.helpers({
  lists: () => {
    return Lists.find({},{sort: {createdAt: -1}});
  },
  // listIngredients: function(list){
  //   return Lists.find('Matlista').ingredientIds
  // }
});

Template.lists.events({
  "click .add-list": (event) => {
    // Prevent default browser form submit
    if(document.getElementById("name").value.length < 1){
      console.log('noh weh joseh');
      return;
    }

    event.preventDefault();
    console.log(document.getElementById("name").value);
    Meteor.call("addList", document.getElementById("name").value);
  },
  "click .remove-list": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    Meteor.call("removeList", event.currentTarget.id);
  },
  'input .list-title-update': (event) => {
      Meteor.call("updateListTitle", this._id, event.target.value);
  }
});
