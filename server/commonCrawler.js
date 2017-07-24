const fs = require('fs');
const osmosis = require('osmosis');
const filterPrice = require('./helpers/filterPrice');

module.exports = {
    crawlUrl: function (domainData, cartUrl, domainUrl, res) {
        osmosis
            .get(cartUrl)
            .find(domainData.divBlock)
            .set({
                'price': domainData.priceElement,
                'img': domainData.img,
                'productName': domainData.productName,
            })
            .error(function (msg) {
                console.error(msg);
                res.json({
                    domain: domainUrl,
                    price: 'price not found',
                    name: 'Product not found on this page',
                    img: './public/images/error-icon.jpg'
                });
                return;
            })
            .data(function(data) {
                let img;
                switch (domainUrl) {
                    case 'josephjoseph-ua.com':
                        img = 'http://josephjoseph-ua.com' + data.img;
                        break;
                    case 'europosud.ua':
                        img = 'https://europosud.ua' + data.img;
                        break;
                    default:
                        img = data.img;
                }

                if (data) {
                    res.json({
                        domain: domainUrl,
                        price: filterPrice(data.price),
                        name: data.productName,
                        img: img
                    })
                }
            });
    }
}
