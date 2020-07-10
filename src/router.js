import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Witness from "./Witness.vue";
import Table from "./Table.vue";
import AboutHome from "./AboutHome.vue";
import BackGround from "./BackGround.vue"
import AboutUs from "./AboutUs";
import AboutYou from "./AboutYou";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        { path: "", component: BackGround },
        { path: "home", component: BackGround },
        {
          path: "witness",
          component: Witness,
          children: [
            { path: "", component: AboutHome },
            { path: "us", component: AboutUs },
            { path: "you", component: AboutYou }
          ]
        },
        { path: "table", component: Table }
      ]
    }
  ]
});
