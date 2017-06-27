const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];
let filteredVendorCode;

osmosis
    .get('https://hmstore.com.ua/buy/razdelochnaya-doska-joseph-joseph-chop2pot-bamboo-large-60112')
    .find('.product-block')
    .set({
        'price': 'div[itemprop=price]'
    })
    .log(console.log)
    .data(function(data) {
        savedData.push(data);
    })
    .done(function() {
        fs.writeFile('data-hmstore.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });