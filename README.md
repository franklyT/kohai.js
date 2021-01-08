# kohai.js

A miniature, SOC/encapsulation web design paradigm for personal use. Model-oriented, light and somewhat permissive of loose design principles for fast development: all components extend
a couple of templating classes, encapsulating JS/HTML/CSS with a rudimentary css-in-js parser.

Currently compiles TypeScript using Babel.


### gulp "build-site" to build site to dist folder

build-site builds the following from an src folder to dist:

* Asset files, e.g. images, videos, music, etc.
  
* A root CSS folder, which is minified, cleaned and prefixed.
  
* A typescript folder, which is compiled into a root file.
    
* HTML structure copying, e.g. from index and nested pages.


## A component might look like this:

```
class Example extends KJSComponent {
  constructor() {
    super();

    this.writeComponent();
  }

  styles = {
    container: /*css*/ `
            display: block;
        `,

    stuff: /*css*/ `
            width: 200px;
            height: 200px;
            background-color: orange;

            :hover {
              background-color: blue;
            }

            :after {
              content: 'abc';
            }

            :before {
              content: 'abc';
            }

            @media (max-width: 1000px) {
              background-color: green !important;
            }
        `,
  };

  get html() {
    return /*html*/ `
      <div class=${this.styles.container}>
        <div class=${this.styles.stuff}>
        </div>
          ${new Hr({ color: "orange", width: "50%", height: "1px" }).html}
      </div>
      `;
  }
}

```
Components are written in our page via the inherited writeComponent() function, whose behavior varies slightly between the KJSComponent and KJSMetaComponent classes, the latter being geared towards writing a component within other components, and the former geared towards procedural delcaration in the HTML.

In each component, we define styles on the style property via CSS-in-JS (media queries, after, before, and hover currently supported), arbitrary functions to be called in the constructor, and the actual html each component should return.

You can nest components by calling a component's get function within another component. For example,

```
class Example extends KJSMetaComponent {
  styles: any;

  constructor() {
    super();

    this.writeComponent();
  }

  get html() {
    return /*html*/ `
      ${new Hr().html}
      ${new Hr().html}
      `;
  }
}

```

Your HTML page writing our components might look like this:

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link href="/dist/CSS/root.min.css" type="text/css" rel="stylesheet" />
    <script src="/dist/js/root.min.js"></script>
</head>

<body>
    <script>
    // components to load
        new Head();
    // this produces two copies of the Example component
        new Example();
        new Example();
    </script>
</body>

</html>
```
