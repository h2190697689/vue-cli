import Vue from "vue";
import Router from "vue-router";

import Login from "../page/login/Login";
import Home from "../page/home/Home";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            name: "Login",
            component: Login,
            children: []
        },
        {
            path: "/home",
            name: "Home",
            component: Home
        }
    ]
})

export default router;
