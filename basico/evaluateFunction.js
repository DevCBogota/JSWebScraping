const extractPriceAndTitle = () => {
  const title = document.querySelector('h1').innerText;
  const price = document.querySelector('.price_color').innerText;

  return {
    title,
    price,
  };
};

module.exports = extractPriceAndTitle;
