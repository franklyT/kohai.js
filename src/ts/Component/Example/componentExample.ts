STYLES.EXAMPLE = {
    styles: {
      container: /*css*/`
            display: flex;
            flex-wrap: wrap;
            margin-left: 19vw;
            margin-right: 19vw;
            margin-top: 2%;
            margin-bottom: 7vh;
            height: fit-content;
            height: -moz-fit-content;

            @media (max-width: 1500px) {
                margin-left: 0 !important;
                margin-right: 0 !important;
                height: 0;
            }

            @media (max-width: 1000px) {
                margin-left: 0 !important;
                margin-right: 0 !important;
                height: 0;
            }
        `,
        stuff: /*css*/`
            display: block;
        `
    }
  };

  Object.defineProperty(COMPONENTS, "example", {
    get: function () {
      document.body.innerHTML += /*html*/`
      <div class=${STYLES.EXAMPLE.container}>
        <div class=${STYLES.EXAMPLE.stuff}>
        </div>
      </div>
      `
    }
  });
  