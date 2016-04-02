// USER INDEX
// -------------------------------------------------------
Meteor.publish('Users', function() {
  return Meteor.users.find();
});

// USERS SHOW
// -------------------------------------------------------
Meteor.publish("User", function(id){

  return Meteor.users.find().fetch();
});
