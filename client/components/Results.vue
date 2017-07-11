<template>
    <div class="col-md-10">
        <ul>
            <li v-for="result in cartInfoFromServer" class="list-group-item">{{result.domain}}<span class="badge">{{result.price}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            cartInfoFromServer() {
                return this.$store.getters.serverText;
            }
        }
    }
</script>