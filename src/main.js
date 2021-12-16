import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import categoriesModule from './modules/categories';
import wareHousesModule from './modules/warehouses';

import { registerModules } from './register-modules';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

registerModules({
	categories: categoriesModule,
	wareHouses: wareHousesModule,
});

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.use(store);
app.use(router);
app.mount('#app');
