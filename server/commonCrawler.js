const fs = require('fs');
const osmosis = require('osmosis');
const domains = require('./domains/domains-data.json');

function filterPrice(price) {
    const removeWhiteSpaces = price.replace(/\s/g, '')
    const getOnlyDigits = removeWhiteSpaces.match(/\d+/);
    return getOnlyDigits[0] + ' UAH';
}

module.exports = {
    crawlUrl: function (cartUrl, productName, img, name, divBlock, priceElement, res, domainUrl) {
        console.log(img)
        osmosis
            .get(cartUrl)
            .find(divBlock)
            .set({
                'price': priceElement,
                'img': img,
                'productName': productName,
            })
            .log(console.log)
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

                res.json({
                    domain: domainUrl,
                    price: filterPrice(data.price),
                    name: data.productName,
                    img: img
                });
            })
    },

    getDomainData: function (domain) {
        return domains.filter(x => x.domain === domain);
    }
}