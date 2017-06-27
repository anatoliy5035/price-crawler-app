const osmosis = require('osmosis');
const fs = require('fs');
let savedData = [];
let filteredVendorCode;

osmosis
    .get('http://josephjoseph-ua.com/p/doska-razdelochnaya-joseph-joseph-chop2pot-bambuk-bolshaya-60112-43761')
    .find('.layout-items')
    .set({
        'price': '.special-price'
    })
    .log(console.log)
    .data(function(data) {
        savedData.push(data);
    })
    .done(function() {
        fs.writeFile('data-joseph-ua.json', JSON.stringify( savedData, null, 4), function(err) {
            if(err) console.error(err);
            else console.log('Data Saved to data.json file');
        })
    });