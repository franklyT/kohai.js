STYLES.EXAMPLE = {
  styles: {
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
  },
};
