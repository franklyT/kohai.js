COMPONENTS.hr = {
    get({
      width = "100%",
      color = "silver",
      height = "1px",
    }: {
      width?: string;
      color?: string;
      height?: string;
    }) {
      return /*html*/ `
    <hr style='width: ${width}; border: none; border-bottom: ${height} solid ${color};'>
        `;
    },
  };
  