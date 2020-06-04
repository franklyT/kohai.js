// down two levels to prevent gulp compilation from pushing it above our components
for (const [KEY] of Object.entries(STYLES)) {
    writeStylesFrom(STYLES[KEY]);
}
