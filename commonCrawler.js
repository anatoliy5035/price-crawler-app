const fs = require('fs');
const osmosis = require('osmosis');

function commonCrawler(cartUrl, name, divBlock, priceElement) {
    osmosis
        .get(cartUrl)
        .find(divBlock)
        .set({
            'price': priceElement
        })
        .log(console.log)
        .data(function(data) {
            fs.writeFile(name + '-data.json', JSON.stringify(data, null, 4), function(err) {
                if(err) console.error(err);
                else console.log('Data Saved to data.json file');
            })
        })
}

module.exports = commonCrawler;