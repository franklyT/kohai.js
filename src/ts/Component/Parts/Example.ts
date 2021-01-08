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
