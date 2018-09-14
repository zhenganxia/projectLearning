// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {Button,Col,Row,Swipe,SwipeItem,Search} from 'vant'
// Vue.use(Button).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Search);

import {Row ,Col, Tabs, TabPane,Table,TableColumn,Button,Message} from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Row).use(Col).use(Tabs).use(TabPane).use(Table).use(TableColumn).use(Button).use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
