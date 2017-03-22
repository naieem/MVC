var route = (function () {
    "user strict";

    var router = [{
        state: "home",
        default: true,
        url: "",
        controller: "home"
    }, {
        state: "login",
        default: false,
        url: "login",
        controller: "login"
    }];
    return router;

})();
