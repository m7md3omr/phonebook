/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

/*
* define commponents
*/
let Navbar = require('./components/Navbar.vue');
let Vuefooter = require('./components/Vuefooter.vue');

let Home = require('./components/Home.vue');
let About = require('./components/About.vue');


/*
*define routes
*/
const routes = [
    { path: "/home", component: Home },
    { path: "/about",component: About }
];

/*
* inistintaiate vue router object
*/
const router = new VueRouter ({
	// mode:'history',
	routes
}) ;

/*
* define vue main object 
* register the objects and other vue elements
*/
const app = new Vue({
    el: '#app',

    router,

    components: {
        Navbar,
        Vuefooter
    }
});