var route = (function () {
    "user strict";

    var homeController = {
        name: "home"
    }
    var loginController = {
        name: "login"
    }

    var router = [{
        state: "home",
        default: true,
        url: "",
        controller: homeController,
        controllerAs: "home"
        //templateUrl:""
    }, {
        state: "login",
        default: false,
        url: "login",
        controller: loginController,
        controllerAs: "login"
    }];
    return router;

    //    function homeController() {
    //        console.log("home");
    //        this.hello=function(){
    //            console.log("hello sunshine");
    //        }
    //    }

    //    function loginController() {
    //        console.log("login");
    //    }

})();
