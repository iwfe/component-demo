import Vue from 'vue'
import vueRouter from 'vue-router'
import entry from './entry'
import dialog from './dialog'
import transition from './transition'

// children还可配置下一级，name指定视图，components指定多个视图，default为默认；或router-view中name指定的。
// redirect重定向，路径或name或方法
const routes = {
    mode: 'hash',  //history hash  abstract
    routes: [
        {
            path :'/',
            component:  entry
        },
        {
            path :'/dialog',
            component: dialog
        }
    ]
}
Vue.use(vueRouter)
// router 实例
var router = new vueRouter(routes);

// 创建 挂载根实例，router配置参数路由，让整个应用都有路由功能
const app = new Vue({
    el:'#root',
    router,
    ...entry
})
// app.$mount('#root');




// const App = {
//   name: 'Test',
//   render: h => {
//     return (
//       '<div id="app">'+
//         '<h1>Basic</h1>'+
//         '<ul>'+
//           '<li><router-link to="/">/</router-link></li>'+
//           '<li><router-link to="/foo">/foo</router-link></li>'+
//           '<li><router-link to="/bar">/bar</router-link></li>'+
//         '</ul>'+
//         '<router-view />'+
//       '</div>'
//     )
//   }
// }
// const Home = { template: '<div>home</div>' }
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// 
// const router = new vueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', component: Home },
//     { path: '/foo', component: Foo },
//     { path: '/bar', component: Bar }
//   ]
// })
// 
// new Vue({
//   // router,
//   render: h => h(App)
// }).$mount('#root')