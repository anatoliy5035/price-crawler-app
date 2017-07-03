function getDomainFromUrl(cartUrl) {
    let httpReg = new RegExp("^(http|https)://", "i");
    let domainReg = new RegExp("^([^/]+)", "i");
    let urlFiltered;
    let domain;

    if (httpReg.test(cartUrl)) {
        urlFiltered = cartUrl.split(httpReg)[2];
        domain =  urlFiltered.split(domainReg)[1];
        return domain;
    }
    domain =  cartUrl.split(domainReg)[1];
    return domain;
}

module.exports = getDomainFromUrl;