const EVENT_WRITE_STYLES = new CustomEvent("writeStyles");

for (const [KEY] of Object.entries(STYLES)) {
    writeStylesFrom(STYLES[KEY]);
}

document.dispatchEvent(EVENT_WRITE_STYLES);
