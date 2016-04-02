FlowRouter.route('/', {
  name: "home",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "home",
      footer: "footer",
    });
  }
});
FlowRouter.route('/ingredients', {
  subscriptions: function (params, queryParams) {
    this.register('ingredients', Meteor.subscribe('ingredients'));
    this.register('lists', Meteor.subscribe('lists'));
  },
  name: "ingredients",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "ingredients",
      footer: "footer",
    });
  }
});
FlowRouter.route('/lists', {
  // es6 arrow functions can't be used????
  subscriptions: function (params, queryParams) {
    this.register('lists', Meteor.subscribe('lists'));
  },
  name: "lists",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "lists",
      footer: "footer",
    });
  }
});
FlowRouter.route('/recipes', {
  // es6 arrow functions can't be used????
  subscriptions: function (params, queryParams) {
    this.register('recipes', Meteor.subscribe('recipes'));
  },
  name: "recipes",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "recipes",
      footer: "footer",
    });
  }
});
