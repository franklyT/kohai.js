// INIT CODE BLOCK
Object.keys(COMPONENTS).forEach(function(key){
    Object.keys(COMPONENTS[key]).forEach(function(styles) {
        if (styles === 'styles') {
            writeStylesFrom(COMPONENTS[key][styles])
        }
    })
});
// INIT CODE BLOCK
