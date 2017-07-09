<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <form @submit.prevent="getDomainName">
                <input type="text"
                       placeholder="product url:"
                       name="url"
                       class="form-control url-input" id="url"
                       v-validate="'required'"
                       v-model="urlData"
                       :class="{'input': true, 'is-danger': errors.has('url') }">
                <button type="submit" id="submitInputButton" class="btn btn-primary">GET</button>
            </form>
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
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$http.post('/getPriceFromUrl', {url: this.urlData})
                            .then(res => {
                                this.serverText.push(res.body);
                            });
                        return;
                    }
               return;
                });
            }
    }
}
</script>

<style scoped>
    .is-danger {
        border-color: #c91b1b;
    }

    a {
        color: #00B7FF;
    }

    .url-input {
        display: inline-block;
        float: none;
        width: 60%;
    }


</style>