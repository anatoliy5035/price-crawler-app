const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];
let filteredVendorCode;

osmosis
    .get('https://europosud.ua/product/12073296')
    .find('.content_right')
    .set({
        'vendor-code': 'i[itemprop=name]',
        'price': 'u[itemprop=price]'
    })
    .log(console.log)
    .data(function(data) {
        let regExp = new RegExp('(^[0-9]+)', 'g');
        filteredVendorCode = data['vendor-code'].split(regExp);
        let newObj = {
            'price': data['price'],
            'vendor-code': filteredVendorCode[1]
        };
        savedData.push(newObj);
    })
    .done(function() {
        fs.writeFile('data-europosud.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });