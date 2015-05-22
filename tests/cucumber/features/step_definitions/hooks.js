(function() {

    'use strict';

    module.exports = function() {

        this.Before(function(event, callback) {
            // Completely resetting DB b4 every scenario!
            this.mirror.call('reset', callback);
        });

    };

})();
