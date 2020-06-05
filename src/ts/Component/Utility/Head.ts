COMPONENTS.head = {};

Object.defineProperty(COMPONENTS.head, "get", {
    get: function () {
      document.head!.innerHTML += /*html*/ `
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${SITE_DATA.title}</title>
          <meta name="Description" content="{{ renderData.description or description or metadata.description }}">
    `;
    }
  });
  
  Object.defineProperty(COMPONENTS.head, "write", {
    get: function () {
      document.head!.innerHTML += COMPONENTS.head.get;
    }
  });
  