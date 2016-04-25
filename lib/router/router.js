//landing page route
FlowRouter.route('/', {
  subscriptions: function (params, queryParams) {
    this.register('ingredients', Meteor.subscribe('ingredients'));
    this.register('lists', Meteor.subscribe('lists'));
  },
  name: "home",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "home",
      footer: "footer",
    });
  }
});
//ingredients routes
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

//lists routes
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

//recipes routes
const recipes = FlowRouter.group({
  prefix: '/recipes',
});
recipes.route('/', {
  // es6 arrow functions can't be used????
  subscriptions: function (params, queryParams) {
    this.register('recipes', Meteor.subscribe('recipes'));
    this.register('lists', Meteor.subscribe('lists'));
    this.register('ingredients', Meteor.subscribe('ingredients'));
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

recipes.route('/:_id', {
  subscriptions: function (params, queryParams) {
     this.register('recipe', Meteor.subscribe('recipe', params._id));
     this.register('lists', Meteor.subscribe('lists'));
     this.register('ingredients', Meteor.subscribe('ingredients'));
  },
  name: "recipe",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "recipe",
      footer: "footer",
    });
  }
});
recipes.route('/:_id/edit', {
  subscriptions: function (params, queryParams) {
     this.register('recipe', Meteor.subscribe('recipe', params._id));
     this.register('lists', Meteor.subscribe('lists'));
     this.register('ingredients', Meteor.subscribe('ingredients'));
  },
  name: "recipe",
  action: (params, queryParams) => {
    BlazeLayout.render('layout', {
      header: "header",
      main: "recipeEdit",
      footer: "footer",
    });
  }
});
