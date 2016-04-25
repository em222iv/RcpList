Recipes = new Meteor.Collection('recipes');

Schema = {};
Schema.Recipes = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 25,
        optional: false
    },
    recipeIngredients: {
        type: Array,
        label: "recipeIngredients",
        optional: true,
    },
    'recipeIngredients.$': {
        type: Object,
    },
    'recipeIngredients.$.recipeIngredient': {
        type: String,
        label: "ingredientName",
        max: 25,
        optional: true
    },
    'recipeIngredients.$.ingredientAmount': {
        type: Number,
        label: "ingredientAmount",
        max: 1000,
        min: 1,
        optional: true
    },
    'recipeIngredients.$.ingredientMeasure': {
        type: String,
        label: "ingredientMeasure",
        max: 50,
        min: 0,
        optional: true
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

// Must remember to attach the schema to the collection
Recipes.attachSchema(Schema.Recipes);
