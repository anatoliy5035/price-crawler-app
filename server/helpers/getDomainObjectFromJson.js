const domainsObj = require('../data/domains-data.json');
module.exports = function (domain) {
    let findDomain = domainsObj.filter(x => x.domain === domain);

    if (findDomain.length) {
        return findDomain;
    } else {
        return false;
    }

};
