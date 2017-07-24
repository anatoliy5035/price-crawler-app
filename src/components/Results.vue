<template>
    <div class="col-md-10">
        <ul>
            <li v-show="this.cartInfoFromServer.domain" class="list-group-item">
              {{this.cartInfoFromServer.domain}}
              <span class="badge">{{this.cartInfoFromServer.price}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            cartInfoFromServer() {
                return this.$store.getters.getServerText;
            }
        }
    }
</script>
