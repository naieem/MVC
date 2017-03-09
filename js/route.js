var route = (function () {
    "user strict";

    var router = [{
        state: "home",
        default: true,
        url: "",
        controller: "homeController",
        controllerAs: "home"
        //templateUrl:""
    }, {
        state: "login",
        default: false,
        url: "login",
        controller: "loginController",
        controllerAs: "login"
    }];
    return router;

})();
