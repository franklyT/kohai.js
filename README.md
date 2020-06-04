# mini-static-gen

### gulp "build-site" to build site to dist folder

Gulp builds the following from an src folder to dist:

* Asset files, e.g. images, videos, music, etc.
  
* A root CSS folder, which is minified, cleaned and prefixed.
  
* A typescript folder, which is compiled into a singular AMD module currently to generate component blueprints and helper functions.
  
* A javascript folder, which supports hosting and loading libraries.
  
* HTML structure copying, e.g. from index and nested pages.
  

Note: Our quick and dirty CSS-in-JS solution supports only SASS-style media queries currently (all that was required for personal use) but could be rolled to accept more SASS-style queries easily.
