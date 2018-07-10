const puppeteer = require('puppeteer');

let scrape = async () => {
    // const browser = await puppeteer.launch({headless: false});
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://books.toscrape.com/');
    const result = await page.evaluate(() => {

        const data = [];
        const elements = document.querySelectorAll('.product_pod');

        for (let element of elements){
            const title = element.childNodes[5].innerText;
            const price = element.childNodes[7].children[0].innerText;

            data.push({title, price});
        }

        return data;
    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value);
});
