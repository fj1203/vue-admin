import Vue from 'vue'
import Router from 'vue-router'
import { sync } from "vuex-router-sync";
import store from "../store";
import types from "../store/mutation-types";
import auth from "../common/auth";

// import HelloWorld from '@/components/HelloWorld'
import login from '../pages/login'
import index from "../index";
import dashboard from "../pages/dashboard.vue";
import NotFoundView from "../components/404.vue";
import menuList from "../pages/sys/menu.vue";
import role from "../pages/sys/role.vue";
import resource from "../pages/sys/resource.vue";

// import app from "../App.vue";
import sysUser from "../pages/sys/user.vue";
import userAdd from "../pages/sys/userAdd.vue";
import resetPwd from "../pages/resetPwd.vue";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test', component: index, children: [
        { path: '*', component: NotFoundView }
      ]
    },
    {
      path: '', component: index, children: [
        { path: '/resetPwd', component: resetPwd },
        { path: '/index', component: dashboard },
        { path: '/sys/menuList', component: menuList },
        { path: '/sys/roleList', component: role },
        { path: '/sys/userList', component: sysUser },
        { path: '/sys/userAdd', component: userAdd },
        { path: '/sys/resource', component: resource }
      ]
    },
  ]
})
sync(store, router)
const { state } = store
router.beforeEach((route, redirect, next) => {
  if (state.device.isMobile && state.sidebar.opened) {
    store.commit(types.TOGGLE_SIDEBAR, false)
  }
  if (!auth.loggedIn() && route.path !== '/login') {
    next({
      path: '/login',
      query: { redirect: route.fullPath }
    })
  } else {
    next()
  }
})

export default router
