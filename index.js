const commonCrawler = require('./commonCrawler');
const dataUrl = require('./cart-url/cart-data.json');

function getCrawlerById(id) {
    let idLoc = id.toString();
    return dataUrl.filter(x => x.id === idLoc);
}

function runCrawler(website) {
    const name = website[0].name;
    const divBlock = website[0].divBlock;
    const priceElement = website[0].priceElement;
    const url = website[0].url;

    commonCrawler(url, name, divBlock, priceElement);
}

let hmstore = getCrawlerById(1);
let europosud = getCrawlerById(2);
let josephjoseph_ua = getCrawlerById(3);
let josephjoseph = getCrawlerById(4);


runCrawler(hmstore);
runCrawler(europosud);
runCrawler(josephjoseph_ua);
runCrawler(josephjoseph);


