const getProducts = () => {
  return fetch(`products.json`).then((response) => response.json());
};

export default getProducts;
