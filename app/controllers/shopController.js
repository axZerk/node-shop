const getIndex = (req, res, next) => {
  res.render('shop/index', { pageTitle: 'Home page' });
};

const getProducts = (req, res, next) => {
  res.render('shop/products', { pageTitle: 'Products page' });
};

export default { getIndex, getProducts };
