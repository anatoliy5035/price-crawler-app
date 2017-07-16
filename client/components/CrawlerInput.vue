<template>
    <div class="container">
        <h1 class="main-title text-center">Crawler</h1>
        <div class="form-group">
            <form @submit.prevent="getDomainName('urlForm')" data-vv-scope="urlForm" class="url-form">
                <input type="text"
                       placeholder="product url:"
                       name="urlAddress"
                       v-validate="'required|url|theSameValue'"
                       class="form-control url-input" id="urlAddress"
                       v-model="urlData"
                       :class="{'input': true, 'is-danger': errors.has('urlForm.urlAddress') }">
                <button :disabled="this.getPreload" type="submit" id="submitInputButton" class="btn btn-primary">
                        <span class="button-text">GET</span>
                        <div class="button-preloader">
                            <div id="circularG_1" class="circularG"></div>
                            <div id="circularG_2" class="circularG"></div>
                            <div id="circularG_3" class="circularG"></div>
                            <div id="circularG_4" class="circularG"></div>
                            <div id="circularG_5" class="circularG"></div>
                            <div id="circularG_6" class="circularG"></div>
                            <div id="circularG_7" class="circularG"></div>
                            <div id="circularG_8" class="circularG"></div>
                        </div>
                </button>
            </form>
            <div v-show="errors.has('urlForm.urlAddress')" class="alert alert-danger">
               {{ errors.first('urlForm.urlAddress') }}
            </div>
            <div v-show="this.serverErrorText" class="alert alert-danger">
                {{this.serverErrorText}}
            </div>
        </div>
    </div>
</template>

<script>

import { Validator } from 'vee-validate';

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
            this.$store.dispatch('getDomainName', this);
        }
    },
    computed: {
        oldInputValue() {
            return this.$store.getters.getOldInputValue;
        },

        serverErrorText() {
            return this.$store.getters.getServerErrorText;
        },

        getPreload() {
            return this.$store.getters.getPreload;
        }
    },

    created() {
        Validator.extend('theSameValue', {
            getMessage: field => {
                return 'Please enter url that doesnt match previous';
            },

            validate: value => {
                return this.oldInputValue !== value;
            }
        });
    }
}
</script>

<style scoped>
    .btn-primary:disabled .button-preloader {
        display: block;
    }

    .btn-primary:disabled .button-text {
        display: none;
    }

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

    .button-preloader{
        position:relative;
        width:28px;
        height:28px;
        margin: auto;
        display: none;
    }

    .circularG{
        position:absolute;
        background-color:rgb(255,255,255);
        width:7px;
        height:7px;
        border-radius:4px;
        -o-border-radius:4px;
        -ms-border-radius:4px;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        animation-name:bounce_circularG;
        -o-animation-name:bounce_circularG;
        -ms-animation-name:bounce_circularG;
        -webkit-animation-name:bounce_circularG;
        -moz-animation-name:bounce_circularG;
        animation-duration:0.718s;
        -o-animation-duration:0.718s;
        -ms-animation-duration:0.718s;
        -webkit-animation-duration:0.718s;
        -moz-animation-duration:0.718s;
        animation-iteration-count:infinite;
        -o-animation-iteration-count:infinite;
        -ms-animation-iteration-count:infinite;
        -webkit-animation-iteration-count:infinite;
        -moz-animation-iteration-count:infinite;
        animation-direction:normal;
        -o-animation-direction:normal;
        -ms-animation-direction:normal;
        -webkit-animation-direction:normal;
        -moz-animation-direction:normal;
    }

    #circularG_1{
        left:0;
        top:11px;
        animation-delay:0.268s;
        -o-animation-delay:0.268s;
        -ms-animation-delay:0.268s;
        -webkit-animation-delay:0.268s;
        -moz-animation-delay:0.268s;
    }

    #circularG_2{
        left:3px;
        top:3px;
        animation-delay:0.364s;
        -o-animation-delay:0.364s;
        -ms-animation-delay:0.364s;
        -webkit-animation-delay:0.364s;
        -moz-animation-delay:0.364s;
    }

    #circularG_3{
        top:0;
        left:11px;
        animation-delay:0.45s;
        -o-animation-delay:0.45s;
        -ms-animation-delay:0.45s;
        -webkit-animation-delay:0.45s;
        -moz-animation-delay:0.45s;
    }

    #circularG_4{
        right:3px;
        top:3px;
        animation-delay:0.536s;
        -o-animation-delay:0.536s;
        -ms-animation-delay:0.536s;
        -webkit-animation-delay:0.536s;
        -moz-animation-delay:0.536s;
    }

    #circularG_5{
        right:0;
        top:11px;
        animation-delay:0.632s;
        -o-animation-delay:0.632s;
        -ms-animation-delay:0.632s;
        -webkit-animation-delay:0.632s;
        -moz-animation-delay:0.632s;
    }

    #circularG_6{
        right:3px;
        bottom:3px;
        animation-delay:0.718s;
        -o-animation-delay:0.718s;
        -ms-animation-delay:0.718s;
        -webkit-animation-delay:0.718s;
        -moz-animation-delay:0.718s;
    }

    #circularG_7{
        left:11px;
        bottom:0;
        animation-delay:0.814s;
        -o-animation-delay:0.814s;
        -ms-animation-delay:0.814s;
        -webkit-animation-delay:0.814s;
        -moz-animation-delay:0.814s;
    }

    #circularG_8{
        left:3px;
        bottom:3px;
        animation-delay:0.9s;
        -o-animation-delay:0.9s;
        -ms-animation-delay:0.9s;
        -webkit-animation-delay:0.9s;
        -moz-animation-delay:0.9s;
    }



    @keyframes bounce_circularG{
        0%{
            transform:scale(1);
        }

        100%{
            transform:scale(.3);
        }
    }

    @-o-keyframes bounce_circularG{
        0%{
            -o-transform:scale(1);
        }

        100%{
            -o-transform:scale(.3);
        }
    }

    @-ms-keyframes bounce_circularG{
        0%{
            -ms-transform:scale(1);
        }

        100%{
            -ms-transform:scale(.3);
        }
    }

    @-webkit-keyframes bounce_circularG{
        0%{
            -webkit-transform:scale(1);
        }

        100%{
            -webkit-transform:scale(.3);
        }
    }

    @-moz-keyframes bounce_circularG{
        0%{
            -moz-transform:scale(1);
        }

        100%{
            -moz-transform:scale(.3);
        }
    }
</style>