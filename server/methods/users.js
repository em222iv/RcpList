Meteor.methods({
    'createUserWithRole':((user, role) => {
        var userId;
        Meteor.call('createUserNoRole', user, function(err, result) {
            if (err) {
                return err;
            }
            Roles.addUsersToRoles(result, role);
            return userId = result;
        });
        return userId;
    }),
    'createUserNoRole': function(user) {
        //Do server side validation
        var user =  Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password,
            profile: {
              // colors: ['#00b8d4','#00e5ff','#0288d1','#81c784','#311b92','#ef6c00','#ff6e40','#ef9a9a'],
              currentList: {},
              lists: [
                {list: {
                  _id: 'efefes',
                  name:'dfs'
                }}
              ],
              recipes: [],
            },
        });
        user.someField = {a:'a'};
        return user;
    }
});
