import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import VueRouer from 'vue-router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import column from './components/column/column'
import heat from './components/heat/heat'
import point from './components/point/point'
import line from './components/line/line'
import dashboard from './components/dashboard/dashboard'
import multipleColumn from './components/multipleColumn/multipleColumn'


Vue.use(resource)
Vue.use(VueRouer)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
  }
})


const router = new VueRouer({
	routes:[
		{
			path:'/column',
			component:column
		},
		{
			path:'/heat',
			component:heat
		},
		{
			path:'/point',
			component:point
		},
		{
			path:'/line',
			component:line
		},
		{
			path:'/dashboard',
			component:dashboard
		},
		{
			path:'/multipleColumn',
			component:multipleColumn
		}],
		linkActiveClass: 'active'
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('dashboard')