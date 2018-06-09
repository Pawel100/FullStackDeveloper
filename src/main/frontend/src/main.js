import Vue from 'vue';
import App from './App.vue';
import VueResource from "vue-resource";
//var VueResource = require('vue-resource'); - to nie działa ze względu na różne dialekty frontendu

Vue.use(VueResource);

Vue.http.options.root = '/api';

new Vue({
    el: '#app',
    render: h => h(App)
});
