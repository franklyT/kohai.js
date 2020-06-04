"use strict";
// Vars
var STYLES = {};
function provideKey() {
    var key = "";
    var ALPHA_KEY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var iterator = 0; iterator < 12; iterator++) {
        key += ALPHA_KEY.charAt(Math.floor(Math.random() * ALPHA_KEY.length));
    }
    return key;
}
// this scopes each component's CSS to itself
// append media queries like SASS styles
function writeStylesFrom(styleObject) {
    var SCOPEKEY = provideKey();
    var newStyle = document.createElement("style");
    for (var _i = 0, _a = Object.entries(styleObject.styles); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var capValue = value;
        var shortCircuitLoop = 0;
        // APPEND MEDIA QUERIES
        while ((capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)) && shortCircuitLoop !== 20) {
            shortCircuitLoop += 1;
            newStyle.innerHTML += capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[1] + "{\n        ." + SCOPEKEY + "-" + key + " {\n          " + capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[2] + "\n        }\n      }";
            capValue = capValue.replace(/(@media [\s\S]*?) {([\s\S]*?)}/, '');
        }
        // WRITE STYLE
        newStyle.innerHTML += "." + SCOPEKEY + "-" + key + "{" + capValue + "}";
        styleObject[key] = SCOPEKEY + '-' + key;
    }
    document.head.appendChild(newStyle);
}
// this simply prevents us from writing to the DOM until all style declarations are created
// the function is prevented from running until styles are ready
function writeDOM(html) {
    document.addEventListener("writeStyles", function () {
        html();
    });
}
STYLES.EXAMPLE = {
    styles: {
        container: /*css*/ "\n            display: flex;\n            flex-wrap: wrap;\n            margin-left: 19vw;\n            margin-right: 19vw;\n            margin-top: 2%;\n            margin-bottom: 7vh;\n            height: fit-content;\n            height: -moz-fit-content;\n\n            @media (max-width: 1500px) {\n                margin-left: 0 !important;\n                margin-right: 0 !important;\n                height: 0;\n            }\n\n            @media (max-width: 1000px) {\n                margin-left: 0 !important;\n                margin-right: 0 !important;\n                height: 0;\n            }\n        ",
        stuff: /*css*/ "\n            display: block;\n        "
    }
};
writeDOM(function () {
    document.getElementById("component_example").innerHTML = /*html*/ "\n      <div class=" + STYLES.EXAMPLE.container + ">\n        <div class=" + STYLES.EXAMPLE.stuff + ">\n        </div>\n      </div>\n      ";
});
document.head.innerHTML += /* html */ "\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title></title>\n    <meta name=\"Description\" content=\"\">\n";
// two levels down to shim AMD/gulp order
var EVENT_WRITE_STYLES = new CustomEvent("writeStyles");
for (var _i = 0, _a = Object.entries(STYLES); _i < _a.length; _i++) {
    var KEY = _a[_i][0];
    writeStylesFrom(STYLES[KEY]);
}
document.dispatchEvent(EVENT_WRITE_STYLES);
