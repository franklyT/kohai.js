// This is two folders down as it is the only way I can make gulp process it properly at the end of the compiled JS file

const EVENT_WRITE_STYLES = new CustomEvent("writeStyles");

for (const [KEY] of Object.entries(STYLES)) {
    writeStylesFrom(STYLES[KEY]);
}

document.dispatchEvent(EVENT_WRITE_STYLES);
