const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];
let filteredVendorCode;

osmosis
    .get('https://hmstore.com.ua/buy/razdelochnaya-doska-joseph-joseph-chop2pot-bamboo-large-60112')
    .find('.product-block')
    .set({
        'vendor-code': 'h2[itemprop=sku]',
        'price': 'div[itemprop=price]'
    })
    .log(console.log)
    .data(function(data) {
        let regExp = new RegExp('([0-9]+)', 'g');
        filteredVendorCode = data['vendor-code'].split(regExp);
        let newObj = {
            'price': data['price'],
            'vendor-code': filteredVendorCode[1]
        };

        savedData.push(newObj);
    })
    .done(function() {
        fs.writeFile('data-hmstore.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });