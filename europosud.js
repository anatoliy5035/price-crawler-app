const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];
let filteredVendorCode;

osmosis
    .get('https://europosud.ua/product/12073296')
    .find('.content_right')
    .set({
        'price': 'u[itemprop=price]'
    })
    .log(console.log)
    .data(function(data) {
        savedData.push(data);
    })
    .done(function() {
        fs.writeFile('data-europosud.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });