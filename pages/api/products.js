const products = () => {
  return fetch(`products.json`).then((response) => response.json());
};
