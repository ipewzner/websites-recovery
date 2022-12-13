const puppeteer = require('puppeteer');
const wifi = require('node-wifi');

const timeDelay = 1000 * 60 * 5; // 5 minutes
const webSite = 'https://www.oref.org.il//12481-he/Pakar.aspx';
const ssid = '******';
const password = '********';

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
        await wifi.connect({ ssid: ssid, password: password }, () => {
            console.log('Connected in: ' + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds());
        });

        const page = await browser.newPage();
        try {
            await page.goto(webSite);
            await sleep(timeDelay);
            await page.close();
        } catch (e) {
            await page.close();
            await sleep(timeDelay);
        }
        //await browser.close();
    } 
})();
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }