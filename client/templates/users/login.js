Template.ingredients.onRendered(() => {

});



Template.login.helpers({

});

Template.login.events({
  'click #signin': function (e,t) {
        e.preventDefault();
        var email = t.find('#login-email').value, password = t.find('#login-password').value;
        console.log(email,password);
        Meteor.loginWithPassword(email, password, function(err){
            if (err) {
                console.log(err);
            }
            else{
                console.log(Meteor.user());
                BlazeLayout.render('layout', { header: 'header', main: 'home', footer:"footer" });
            }
        });
        return false;
      }
});
