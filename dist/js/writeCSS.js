// runs after every component style is defined
for (const [KEY] of Object.entries(STYLES)) {
    writeStylesFrom(STYLES[KEY]);
}
