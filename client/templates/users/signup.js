
Template.signup.helpers({

});

Template.signup.events({
  "click #create-account": function(event, template){
    console.log('a')
    var data, validationErrors;
    var user = {
           username: document.getElementById('username').value,
           email: document.getElementById('email').value,
           password:document.getElementById('password').value,
         }
     if (validationErrors) {
       console.log('Error');
     } else {
         return Meteor.call('createUserWithRole', user, 'standard', function (err, userId) {
             if (!err) {
                 console.log('succs');

                 //User created!!
             } else {
                 console.log('errs');
                 //Insertion Error
             }
         });
     }
  }
});
