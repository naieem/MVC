var library = (function () {
    "use strict";
    var routes = [];
    var controller = [];

    /* Initial loading of states and route */
    for (var i = 0; i < route.length; i++) {
        routes[route[i].state] = route[i];
        generateController(route[i].controllerAs, route[i].controller);
        if (route[i].default) {
            document.location.assign('#/' + route[i].url);
            load(route[i].state, route[i].controller);
            window.action = controller[route[i].controllerAs];
            //            var hello = new Controller();
            //            hello.bind(obj);
            //            window.action = hello;
            //            action.prototype.hello = function () {
            //                console.log("sdfd");
            //            }
            //            window.action.bind(obj);
        }
    }
    /* On Hashchange action */
    window.onhashchange = function () {
        var str = location.hash;
        var res = str.slice(2);
        if (res == '')
            res = 'home';
        load(routes[res].state, routes[res].controller);
        //        console.log(controller);
        //        console.log(res);
    }

    /* Load view and controller */
    function load(view, controller) {
        var layout = document.getElementsByTagName("view-content");
        for (var i = 0; i < layout.length; i++) {
            var context = layout[i];
            var script = document.createElement('script');
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    context.innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "view/" + view + ".view.html", true);
            xhttp.send();
        }
        //        controller();
    }

    /* controller constructor function */
    //    function Controller() {
    //        this.name = "hello world";
    //    }
    function generateController(name, ctrl) {
        //        ctrl = new Controller();
        controller[name] = ctrl;
        //        ctrl.name="naieem";
        //        console.log(ctrl);
        //        window.ctrl = ctrl;
    }
    console.log(controller);

})();
