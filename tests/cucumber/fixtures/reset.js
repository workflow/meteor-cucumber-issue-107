/**
 * Resetting the entire app prior to any new scenario execution, in-line with bdd best practices
 */
(function() {

    'use strict';

    Meteor.methods({
        'reset': function() {
            Meteor.users.remove({});
        }
    });

})();