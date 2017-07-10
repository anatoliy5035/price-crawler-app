<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <form @submit.prevent="getDomainName('urlForm')" data-vv-scope="urlForm" class="url-form">
                <input type="text"
                       placeholder="product url:"
                       name="urlAddress"
                       v-validate="'required|url'"
                       class="form-control url-input" id="urlAddress"
                       v-model="urlData"
                       :class="{'input': true, 'is-danger': errors.has('urlForm.urlAddress') }">
                <button type="submit" id="submitInputButton" class="btn btn-primary">GET</button>
                <div v-show="errors.has('urlForm.url')" class="help">Please enter valid url</div>
            </form>
            <div v-show="errors.has('urlForm.urlAddress')" class="alert alert-danger">
                {{ errors.first('urlForm.urlAddress') }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CrawlerInput',
    data() {
        return {
            urlData: ''
        }
    },
    methods: {
        getDomainName(scope) {
            this.scope = scope;
            this.$store.dispatch('getDomainName', this)
        }
    }
}
</script>

<style scoped>
    .url-form {
        padding-bottom: 25px;
    }
    .is-danger {
        border-color: #c91b1b;
        box-shadow: inset 0 1px 1px rgba(201, 27, 27, 0.33), 0 0 8px rgba(201, 27, 27, 0.05);
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