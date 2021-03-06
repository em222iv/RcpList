Lists = new Meteor.Collection('lists');

Schema = {};
Schema.Lists = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 25,
        optional: false
    },
    author: {
        type: String,
        label: "Author",
        max: 100,
        optional: true
    },
    listIngredients: {
        type: Array,
        label: "listIngredients",
        optional: true,
    },
    'listIngredients.$': {
        type: Object,
    },
    'listIngredients.$.listIngredient': {
        type: String,
    },
    'listIngredients.$.ingredientAmount': {
        type: Number,
        min: 1
    },
    listRecipes: {
        type: Array,
        label: "listRecipes",
        optional: true,
    },
    'listRecipes.$': {
        type: Object,
    },
    'recipeIngredients.$.recipeIngredient': {
        type: String,
    },
    'recipeIngredients.$.ingredientAmount': {
        type: Number,
        min: 1
    },
    createdAt: {
        type: Date,
        optional: true,
        denyUpdate: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    updatedAt: {
        type: Date,
        optional: true,
        denyInsert: true,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Lists.attachSchema(Schema.Lists);
