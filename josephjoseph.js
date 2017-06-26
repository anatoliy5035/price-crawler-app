const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];

osmosis
    .get('http://josephjoseph.com.ua/gibkie-doski/22-razdelochnaya-doska-chop2pot-plus-white.html')
    .find('.pb-center-column')
    .set({
        'vendor-code': 'span[itemprop=sku]',
        'price': 'span[itemprop=price]'
    })
    .log(console.log)
    .data(function(data)     {
        savedData.push(data);
    })
    .done(function() {
        fs.writeFile('data-joseph.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });