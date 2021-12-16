const Module = () => import('./Module.vue');
const WareHouse = () => import('./views/WareHouse.vue');

const moduleRoute = {
	path: '/warehouses',
	component: Module,
	children: [
		{
			path: '',
			component: WareHouse,
			name: 'warehouse',
		},
	],
};

export default (router) => {
	router.addRoute(moduleRoute);
};
