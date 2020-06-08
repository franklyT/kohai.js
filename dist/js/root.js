"use strict";
// metadata
var SITE_DATA = {
    title: ""
};
var STYLES = {};
var COMPONENTS = {};
//
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
    var SCOPE_KEY = provideKey();
    var newStyle = document.createElement("style");
    var _loop_1 = function (key, value) {
        var capValue = value;
        var APPEND_MOD = [
            ["@media", function () { return capValue.match(new RegExp("(@media[\\s\\S]*?) {([\\s\\S]*?)}"))[1] + "{." + SCOPE_KEY + "-" + key + "{" + capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[2] + "}}"; }],
            [":hover", function () { return "." + SCOPE_KEY + "-" + key + capValue.match(new RegExp("(:hover[\\s\\S]*?) {([\\s\\S]*?)}"))[0]; }],
            [":after", function () { return "." + SCOPE_KEY + "-" + key + capValue.match(new RegExp("(:after[\\s\\S]*?) {([\\s\\S]*?)}"))[0]; }],
            [":before", function () { return "." + SCOPE_KEY + "-" + key + capValue.match(new RegExp("(:before[\\s\\S]*?) {([\\s\\S]*?)}"))[0]; }]
        ];
        // currently parses hover and media
        APPEND_MOD.forEach(function (selectDoBlock) {
            // try-catch to suppress return errors
            try {
                if (selectDoBlock && selectDoBlock[1]()) {
                    var shortCircuitLoop = 0;
                    var regExp = new RegExp("(" + selectDoBlock[0] + "[\\s\\S]*?) {([\\s\\S]*?)}");
                    while (capValue.match(regExp) &&
                        shortCircuitLoop !== 20) {
                        shortCircuitLoop += 1;
                        newStyle.innerHTML += selectDoBlock[1]();
                        capValue = capValue.replace(regExp, "");
                    }
                }
            }
            catch (error) {
                // console.log(error)
            }
        });
        // WRITE STYLE
        newStyle.innerHTML += "." + SCOPE_KEY + "-" + key + "{" + capValue + "}";
        styleObject[key] = SCOPE_KEY + "-" + key;
    };
    for (var _i = 0, _a = Object.entries(styleObject.styles); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
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
        container: /*css*/ "\n            display: block;\n        ",
        stuff: /*css*/ "\n            width: 200px;\n            height: 200px;\n            background-color: orange;\n            :hover {\n              background-color: blue;\n            }\n            :after {\n              content: 'abc';\n            }\n            :before {\n              content: 'abc';\n            }\n            @media (max-width: 1000px) {\n              background-color: green !important;\n            }\n        ",
    },
};
COMPONENTS.example = {
    get get() {
        return /*html*/ "\n      <div class=" + STYLES.EXAMPLE.container + ">\n        <div class=" + STYLES.EXAMPLE.stuff + ">\n        </div>\n      </div>\n      ";
    },
    get write() {
        document.body.innerHTML += COMPONENTS.example.get;
        return;
    },
};
COMPONENTS.head = {
    get get() {
        return /*html*/ "\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>" + SITE_DATA.title + "</title>\n    <meta name=\"Description\" content=\"{{ renderData.description or description or metadata.description }}\">\n";
    },
    get write() {
        document.head.innerHTML += COMPONENTS.head.get;
        return;
    },
};
