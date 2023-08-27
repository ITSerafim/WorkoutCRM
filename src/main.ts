import { createApp } from 'vue';
import App from './App.vue';
import router from './router.ts';
import { createPinia } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

library.add(fas, far, fab);

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
