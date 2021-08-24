const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    page.emulaemulateMediaType = 'screen';
    await page.pdf({
      path: '../obs.pdf', // path (relative to CWD) to save the PDF to.
      printBackground: false, // print background colors
      format: 'A4'
    });
    await browser.close();
  })()
