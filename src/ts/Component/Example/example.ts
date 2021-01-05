COMPONENTS.example = {
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

  get get() {
    return /*html*/ `
      <div class=${this.styles.container}>
        <div class=${this.styles.stuff}>
        </div>
        ${COMPONENTS.hr.get({color: 'orange', width: '50%', height: '1px'})}
      </div>
      `;
  },
  
  get write() {
     document.body.insertAdjacentHTML('beforeend', this.get);
    return;
  },
};
