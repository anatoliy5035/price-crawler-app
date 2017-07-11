<template>
    <div class="col-sm-2 col-md-2">
        <div class="thumbnail" v-show="this.cartInfoFromServer !==0">
            <img class="product-img" v-bind:src="this.cartInfoFromServer.img" alt="">
            <div class="caption">
                <h3>{{this.cartInfoFromServer.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'CartInfo',
        data() {
            return {

            }
        },
        methods: {

        },
        computed: {
            cartInfoFromServer() {
                return this.$store.getters.serverText[this.$store.getters.serverText.length - 1];
            }
        },
        created: function () {
            this.cartInfoFromServer
        }
    }
</script>

<style scoped>
    .product-img {
        border-bottom: 1px solid #ddd;
    }

    h3 {
        font-size: 15px;
        line-height: 20px;
    }
</style>