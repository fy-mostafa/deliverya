const Module = () => import('./Module.vue');

const moduleRoute = {
	path: '/categories',
	component: Module,
	children: [],
};

export default (router) => {
	router.addRoute(moduleRoute);
};
