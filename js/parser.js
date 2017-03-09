var parser = (function () {
    "user strict";

    return {
        parse: parse,
        directive: parseDirective,
        parseDom: parseDom
    }

    function parse() {
        setTimeout(function () {
            var doc = document.body.innerHTML;
            var res = doc.replace(/{[a-z A-Z]+}/, function (x) {
                x = x.slice(1, x.length - 1);
                return controller[window.active][x];
            });
            document.body.innerHTML = res;
        }, 10);
    }

    function parseDirective() {
        setTimeout(function () {
            var repeatElement = document.querySelectorAll('[go-repeat]');
            for (var i = 0; i < repeatElement.length; i++) {
                var skeleton = repeatElement[i].outerHTML;
                var attr = repeatElement[i].getAttribute("go-repeat");
                var data = controller[window.active][attr];
                //console.log(data);
                var result = render(skeleton, data);
                repeatElement[i].innerHTML = result;
                console.log(result);
            }
        }, 100);
    }

    function parseDom() {
        var dom = document.body;
        var child = dom.childNodes;
        var domChild = [];
        for (var i = 0; i < child.length; i++) {
            if (child[i].nodeName != "#text" && child[i].nodeName != "#comment" && child[i].nodeName != "SCRIPT")
                domChild.push(child[i]);
        }
        console.log(domChild);
        parseChildDom(domChild);
    }

    function parseChildDom(domChild) {
        //console.log(domChild.length);
        if (domChild.length > 0) {
            for (var i = 0; i < domChild.length; i++) {
                //            if (domChild[i].childNodes != 0) {
                //                parseChildDom(domChild[i].childNodes);
                //                console.log("no childnodes");
                //            } else
                console.log(domChild[i].children.length);
                console.log(domChild[i].children);
                parseChildDom(domChild[i].children);
            }
        }
    }

    function render(skeleton, data) {
        var text = "";
        for (var i = 0; i < data.length; i++) {
            text += skeleton.replace(/{[a-z A-Z]+}/g, function (x) {
                x = x.slice(1, x.length - 1);
                return data[i][x];
            });
        }
        return text;

    }

})();
