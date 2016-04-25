Template.layout.helpers({
    users: () => {
      return Meteor.users.find()
    }
});
Template.layout.events({
  "click #logout": function(event, template){
    console.log('1');
     Meteor.logout();
  }
});
