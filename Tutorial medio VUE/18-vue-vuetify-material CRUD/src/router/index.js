import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
	},
	{
		path: '/grid',
		name: 'Grid',
		component: () => import(/* webpackChunkName: "Grid" */ '../views/Grid.vue')
	},
	{
		path: '/grid2',
		name: 'Grid2',
		component: () => import(/* webpackChunkName: "Grid2" */ '../views/Grid2.vue')
	},
	{
		path: '/buttons',
		name: 'Buttons',
		component: () => import(/* webpackChunkName: "Buttons" */ '../views/Buttons.vue')
	},
	{
		path: '/cards',
		name: 'Cards',
		component: () => import(/* webpackChunkName: "Cards" */ '../views/Cards.vue')
	},
	{
		path: '/dialogs',
		name: 'Dialogs',
		component: () => import(/* webpackChunkName: "Dialogs" */ '../views/Dialogs.vue')
	},
	{
		path: '/crud',
		name: 'Crud',
		component: () => import(/* webpackChunkName: "Dialogs" */ '../views/Crud.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
