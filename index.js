const puppeteer = require('puppeteer');
const wifi = require('node-wifi');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized']
    });

    wifi.init({
        iface: null
    }); // network interface, choose a random wifi interface if set to null

    while (true) {
        let date_ob = new Date();
        await wifi.connect({ ssid: 'ip1', password: '85208520' }, () => {
            console.log('Connected in: ' + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds());
        });

        const page = await browser.newPage();
        try {
            await page.goto('https://www.oref.org.il//12481-he/Pakar.aspx');
            await sleep(350000);
            await page.close();
        } catch (e) {
            await page.close();
            await sleep(30000);
        }
        //await browser.close();
    } 
})();
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }