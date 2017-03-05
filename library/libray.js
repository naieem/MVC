var library = (function () {
    "use strict";
    var directives = [];
    return {
        directives: directives,
        add: add
    };

    function add(name, fn) {
        var obj = {
            name: name
        };
        directives.push(obj);
        fn();
    }

})();
