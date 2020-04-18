import Vue from 'vue'
import Router from 'vue-router'
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import GroupPage from "../components/GroupPage";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/associations',
      name: 'GroupPage',
      component: GroupPage
    },
  ]
})
