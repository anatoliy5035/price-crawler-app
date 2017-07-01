let searchSubmits = {

    getPriceFromUrl: function () {
        let inputValue = $('.url-input').val();

        //send request for google geometry to get lat, lng from inputValue
        fetch('/getPriceFromUrl', {
            method: 'post',
            body: JSON.stringify({
                inputValue: inputValue
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.status == 'INVALID_REQUEST') {
                throw new Error('invalid request from google geolocation');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
    },

    events: function () {
        const _this = this;

        $('body').on('click', '#submitInputButton', function (e) {
            e.preventDefault();
            _this.getPriceFromUrl();
        });
    },

    init: function () {
        this.events();
    },

}

searchSubmits.init();