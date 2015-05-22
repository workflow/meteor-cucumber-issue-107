(function() {

    'use strict';

    module.exports = function() {

        // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
        var url = require('url');

        this.Given(/^I am an admin$/, function(callback) {
            this.mirror.call('createAdminUser').then(function() {
                browser.url(url.resolve(process.env.ROOT_URL, '/')).executeAsync(function(done) {
                    Meteor.loginWithPassword('admin', '123', done);
                }).should.eventually.not.have.deep.property('value.message').and.notify(callback);
            });
        });
    };

})();