var parser = (function () {
    "user strict";

    return {
        parse: parse,
        directive: parseDirective
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
