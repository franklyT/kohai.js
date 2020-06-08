# mini-static-gen

### gulp "build-site" to build site to dist folder

build-site builds the following from an src folder to dist:

* Asset files, e.g. images, videos, music, etc.
  
* A root CSS folder, which is minified, cleaned and prefixed.
  
* A typescript folder, which is compiled into a singular AMD module currently to generate component blueprints and helper functions.
  
* A javascript folder, which supports hosting and loading libraries.
  
* HTML structure copying, e.g. from index and nested pages.

Our root compiled js is loaded into every html page in the head, to prevent pop-in. Our CSS is also loaded explicitly into the html file for the same reason.

Components are written sequentially into an HTML page in the body tag via their "write" function.

A component consits of two properties, "write" and "get". Write will append the component to the document and call necessary additional code, and get will simply return a template literal of said component.

A component might look like this:

```
STYLES.EXAMPLE = {
  styles: {
    container: /*css*/ `
            display: block;
 
            @media (max-width: 1500px) {
            // css
            }
            
            :hover {
            // css
            }
            
            :after {
            // css
            }
            
            :before {
            // css
            }
        `,
    stuff: /*css*/ `
            display: block;
        `,
  },
};

COMPONENTS.example = {
  get get() {
    return /*html*/ `
      <div class=${STYLES.EXAMPLE.container}>
        <div class=${STYLES.EXAMPLE.stuff}>
        </div>
      </div>
      `;
  },
  get write() {
    document.body.innerHTML += COMPONENTS.example.get;
    return;
  }
};
```

Herein we define styles with our CSS-in-JS (media queries, after, before, and hover currently supported), define what is returned when the component get function is called (the HTML), and what is returned when the component write function is called.

You can nest components by calling a component's get function within another component. For example,

```
COMPONENTS.example = {
  get get() {
    return  /*html*/`
        ${COMPONENTS.example2.get}
        ${COMPONENTS.example2.get}
      `
  },
  get write() {
    document.body.innerHTML += COMPONENTS.example.get;
    return;
  }
};
```

Your HTML page writing our components might look like this:

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link href="/./CSS/root.min.css" type="text/css" rel="stylesheet" />
    <!-- render root script in head to prevent pop-in -->
    <script src="/./js/root.min.js"></script>
</head>

<body>
    <script>
    // components to load
        COMPONENTS.head.write;
    // this produces two copies of the Example component
        COMPONENTS.example.write;
        COMPONENTS.example.write;
    </script>
    <sript src="/./dist/js/Library/example-API.js"></script>
</body>

</html>
```
