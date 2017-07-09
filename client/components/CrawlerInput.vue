<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <label for="url">product url:</label>
            <input type="text" class="form-control url-input" id="url" v-model="urlData">
            <button type="submit" id="submitInputButton" class="btn btn-primary" v-on:click="getDomainName()">GET</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="response in serverText">{{response.domain}}<span class="badge">{{response.price}}</span></li>
        </ul>
    </div>
</template>


<script>

export default {
    name: 'CrawlerInput',
//    components: {
////        routes
//    },
    data() {
        return {
            urlData: '',
            serverText: []
        }
    },
//    ready() {
////            this.getBook()
//    },
    methods: {
            getDomainName() {
                this.$http.post('/getPriceFromUrl', {url: this.urlData})
                    .then(res => {
                            this.serverText.push(res.body);
                    })
            }
    }
}
</script>

<style scoped>
    a {
        color: #00B7FF;
    }

    .url-input {
        display: inline-block;
        float: none;
        width: 60%;
    }


</style>