<template>
    <ul>
        <li v-for="result in results" class="list-group-item">{{result.domain}}<span class="badge">{{result.price}}</span></li>
    </ul>
</template>

<script>
    export default {
        computed: {
            results() {
                return this.$store.getters.serverText;
            }
        }
    }
</script>