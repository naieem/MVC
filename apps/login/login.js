(function () {
    "use strict";
    console.log("hi this is from login app");

    //    var el=document.getElementById("hello");
    //    if(el){
    //        console.log("hello exists");
    //    }
    //    else{
    //        console.log("hello not exists");
    //    }
    //    document.querySelector("#hello").addEventListener("click",function(){
    //        alert("sdfdsfds");
    //    });

    document.addEventListener('click', function (e) {
//        if (hasClass(e.target, 'bu')) {
//            // .bu clicked
//            // Do your thing
//        } else if (hasClass(e.target, 'test')) {
//            // .test clicked
//            // Do your other thing
//        }
//        console.log(e.target.id);
        if(e.target.id == "hello"){
//            console.log(e);
            alert(e.target.innerText);
            document.location.assign('#/clickedevent');
        }

    }, false);

})();
