module.exports = function (price) {
    if (typeof price !== 'undefined' && price !== null) {
        const removeWhiteSpaces = price.replace(/\s/g, '');
        const getOnlyDigits = removeWhiteSpaces.match(/\d+/);
        return getOnlyDigits[0] + ' UAH';
    } else {
        return 'Price not found';
    }
};