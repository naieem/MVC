var HtmlCompiler = (function() {
    //    var source=$("#home").html();
    //    var template = Handlebars.compile(source);
    //    console.log(source);
    //     document.addEventListener("DOMContentLoaded", function (event) {
    //         var source = document.getElementById("home").innerHTML;
    // //        console.log(source);
    //         console.log("hello world");
    //     });
    return {
        compile: compile
    }

    function compile(id) {
        // setTimeout(function() {
        //     // var source = document.getElementById("home").innerHTML;
        //     // var template = Handlebars.compile(source);
        //     // var context = { title: "My New Post", body: "This is my first post!" };
        //     // var html = template(context);
        //     return "sdfd";
        // }, 100);
        var source = document.getElementById(id).innerHTML;
        var template = Handlebars.compile(source);
        var context = { title: "My New Post", body: "This is my first post!" };
        var html = template(context);
        return html;
    }
})();
