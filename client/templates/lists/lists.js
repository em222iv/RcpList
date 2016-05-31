Template.lists.helpers({
  lists: () => {
    return Lists.find({},{sort: {createdAt: -1}});
  },
  userLists: () => {
    if (Meteor.user())
     return Meteor.user().profile.lists
  }
});

Template.lists.events({
  "click .remove-list": (event) => {
    // Prevent default browser form submit
    event.preventDefault();
    console.log(event.currentTarget.id)
    Meteor.call("removeList", event.currentTarget.id);
  },
  'input .list-title-update': (event) => {
      Meteor.call("updateListTitle", this._id, event.target.value);
  },
  'click .set-current-list': (event) => {
      let list = getIndex(Meteor.user().profile.lists,event.currentTarget.id)

      Meteor.call("UsercurrentList", list)
      Session.set('currentList', list);
      console.log(Session.get('currentList'))
  }
});
function getIndex(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i].id === obj.id) {
           return a[i];
       }
    }
    return false;
}
