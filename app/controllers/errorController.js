const get404 = (req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Error page' });
};

export default { get404 };
