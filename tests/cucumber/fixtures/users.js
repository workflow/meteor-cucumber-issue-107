/**
 * User related fixtures
 */
(function() {

    'use strict';

    Meteor.methods({
        'createAdminUser': function() {
            Accounts.createUser({
                username: 'admin',
                email: 'admin@test.com',
                password: '123',
                profile: {
                    firstName: 'Master',
                    lastName: 'Alabaster'
                }
            });
        }
    });

})();