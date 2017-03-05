(function () {
    "user strict";
    var layout = document.getElementsByTagName("layout");
    console.log(layout.length);
    for (var i = 0; i < layout.length; i++) {
//        console.log(layout[i]);
        //        layout[i].innerHTML="sdfds";
        var appName = layout[i].getAttribute("app");
        var context = layout[i];
        var script = document.createElement('script');
        script.src = "apps/" + appName + "/" + appName + ".js";
        script.onload = function () {
            console.log(appName, "loaded");
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
//                console.log(context);
                if (this.readyState == 4 && this.status == 200) {
                    context.innerHTML = this.responseText;
                }
            };
            xhttp.open("GET", "apps/" + appName + "/" + appName + ".html", true);
            xhttp.send();
        };

        document.body.appendChild(script); //or something of the likes
    }


    //    console.log(directive);
    //    directive.add("hello",function(){
    //      console.log("hello added");
    //    })

})();
