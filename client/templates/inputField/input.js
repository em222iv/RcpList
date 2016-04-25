Template.input.onRendered(() => {
});
Template.input.helpers({
});

Template.input.events({
    "click .add-ingredient": (event) => {
        // Prevent default browser form submit
        console.log('1');
        event.preventDefault();
        if (document.getElementById("name").value.length < 1) {
            console.log('noh weh joseh');
            return;
        }

        Meteor.call("addIngredient", document.getElementById("name").value);
    },
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
});
