function provideKey() {
  let key:string = "";
  const ALPHA_KEY: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let iterator = 0; iterator < 12; iterator++) {
    key += ALPHA_KEY.charAt(Math.floor(Math.random() * ALPHA_KEY.length));
  }
  return key;
}

// this scopes each component's CSS to itself
// append media queries like SASS styles
function writeStylesFrom(styleObject: any) {
  const SCOPE_KEY = provideKey();
  let newStyle:Element = document.createElement("style");

  for (let [key, value] of Object.entries(styleObject.styles)) {
    let capValue: any = value;
    const APPEND_MOD: Array<any> = [
      [ "@media", function() {return `${capValue.match(new RegExp(`(@media[\\s\\S]*?) {([\\s\\S]*?)}`))[1]}{.${SCOPE_KEY}-${key}{${capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[2]}}}`} ], 
      [ ":hover", function() {return `.${SCOPE_KEY}-${key}${capValue.match(new RegExp(`(:hover[\\s\\S]*?) {([\\s\\S]*?)}`))[0]}`} ],
      [ ":after", function() {return `.${SCOPE_KEY}-${key}${capValue.match(new RegExp(`(:after[\\s\\S]*?) {([\\s\\S]*?)}`))[0]}`} ],
      [ ":before", function() {return `.${SCOPE_KEY}-${key}${capValue.match(new RegExp(`(:before[\\s\\S]*?) {([\\s\\S]*?)}`))[0]}`} ]
  ];

  // currently parses hover and media
  APPEND_MOD.forEach( (selectDoBlock) => {
    // try-catch to suppress return errors
    try {
      if (selectDoBlock && selectDoBlock[1]()) {
        let shortCircuitLoop: number = 0;
        let regExp = new RegExp(`(${selectDoBlock[0]}[\\s\\S]*?) {([\\s\\S]*?)}`);
        while (
          capValue.match(regExp) &&
          shortCircuitLoop !== 20
        ) {
          shortCircuitLoop += 1;
          newStyle.innerHTML += selectDoBlock[1]();
          capValue = capValue.replace(regExp, "");
        }}} catch(error) {
          // console.log(error)
        }
  })

    // WRITE STYLE
    newStyle.innerHTML += `.${SCOPE_KEY}-${key}{${capValue}}`;
    styleObject[key] = SCOPE_KEY + "-" + key;
  }
  document.head.appendChild(newStyle);
}


// this simply prevents us from writing to the DOM until all style declarations are created
// the function is prevented from running until styles are ready

function writeDOM(html: any) {
  document.addEventListener("writeStyles", function () {
    html();
  });
}
