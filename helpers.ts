function provideKey() {
  let key = "";
  const ALPHA_KEY: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let iterator = 0; iterator < 12; iterator++) {
    key += ALPHA_KEY.charAt(
      Math.floor(Math.random() * ALPHA_KEY.length)
    );
  }
  return key;
}

// this scopes each component's CSS to itself
// append media queries like SASS styles
function writeStylesFrom(styleObject: any) {
  const SCOPEKEY = provideKey();
  let newStyle = document.createElement("style");

  for (let [key, value] of Object.entries(styleObject.styles)) {
    let capValue:any = value;
    let shortCircuitLoop:number = 0;

    // APPEND MEDIA QUERIES
    while ((capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)) && shortCircuitLoop !== 20) {
      shortCircuitLoop += 1;
      newStyle.innerHTML += `${capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[1]}{
        .${SCOPEKEY}-${key} {
          ${capValue.match(/(@media [\s\S]*?) {([\s\S]*?)}/)[2]}
        }
      }`
      capValue = capValue.replace(/(@media [\s\S]*?) {([\s\S]*?)}/, '');
    }

    // WRITE STYLE
    newStyle.innerHTML += `.${SCOPEKEY}-${key}{${capValue}}`;
    styleObject[key] = SCOPEKEY + '-' + key;
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
