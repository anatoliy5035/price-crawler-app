<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <form @submit.prevent="getDomainName">
                <input type="text"
                       placeholder="product url:"
                       name="url"
                       v-validate="'required'"
                       class="form-control url-input" id="url"
                       v-model="urlData"
                       :class="{'input': true, 'is-danger': errors.has('url') }">

                <button type="submit" id="submitInputButton" class="btn btn-primary">GET</button>
            </form>
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
        getDomainName() {
            this.$store.dispatch('getDomainName', this, this.urlData)
        }
    }
}
</script>

<style scoped>
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