(function () {
    var obj = {
        hello: hello,
        test: true,
        home: "this is excelent variable",
        data: [
            {
                name: "supto",
                title: "title from supto"
            },
            {
                name: "forid",
                title: "title from forid"
            },
            {
                name: "ayon",
                title: "title from ayon"
            }
        ]
    }

    function hello() {
        console.log("hello world from Home controller");
    }
    Controller.add("homeController", obj);

})()
