import classie from 'classie';

Template.header.onRendered(() => {
    this.el = document.getElementsByClassName("checkout")[0];
});

Template.header.helpers({
    Lists: () => {
        return Lists.find({}, {
            sort: {
                createdAt: -1
            }
        });
    },
    List: () => {
        if (Session.get('currentList') === undefined) {
            Session.set('currentList', Lists.findOne({}, {
                sort: {
                    createdAt: -1
                }
            }));
        } else {
            Session.set('currentList', Lists.findOne(Session.get('currentList')._id));
        }
        return Session.get('currentList');
    }
});

Template.header.events({
    "click .checkout__button": (event) => {
        classie.add(this.el, 'checkout--active');
    },
    "click .checkout__cancel": (event) => {
        classie.remove(this.el, 'checkout--active');
    },
    "click .remove-ingredient": (event) => {
        Meteor.call("removeIngredientFromList", Session.get('currentList')._id, event.currentTarget.id);
    },
});
