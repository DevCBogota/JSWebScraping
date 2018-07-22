const extractMultiplePricesAndTitles = (selector) => {
  const data = [];
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    const title = element.childNodes[5].innerText;
    const price = element.childNodes[7].children[0].innerText;

    data.push({ title, price });
  });

  return data;
};

module.exports = extractMultiplePricesAndTitles;
