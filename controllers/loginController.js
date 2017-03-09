(function () {
    var obj = {
        hello: hello,
        test: true,
        title:"this is title"
    }

    function hello() {
        console.log("hello world from login Controller");
    }
    Controller.add("loginController", obj);

})()
