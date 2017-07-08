<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <label for="url">product url:</label>
            <input type="text" class="form-control url-input" id="url" v-model="urlData">
            <button type="submit" id="submitInputButton" class="btn btn-primary" v-on:click="getDomainName()">GET</button>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="text in serverText">{{text.text}}<span class="badge">{{text.domain}}</span></li>
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
            urlData: 'dadada',
            serverText: []
        }
    },
//    ready() {
////            this.getBook()
//    },
    methods: {
            getDomainName() {
                this.$http.post('/getPriceFromUrl')
                    .then(res =>{
//                            console.log(res.body.text);
                            this.serverText.push(res.body);
                    })}
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