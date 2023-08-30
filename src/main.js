import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import BreadCrumb from 'primevue/breadcrumb';
import ToastService from 'primevue/toastservice';
import ToastAlert from 'primevue/toast';
import ChartMenu from 'primevue/chart';
import CalendarMenu from 'primevue/calendar';

import DataTable from 'primevue/datatable';
import ColumnMenu from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component('InputText', InputText)
app.component('BreadCrumb', BreadCrumb)
app.component('ToastAlert', ToastAlert)
app.component('ChartMenu', ChartMenu)
app.component('CalendarMenu', CalendarMenu)
app.component('DataTable', DataTable)
app.component('ColumnMenu', ColumnMenu)

app.use(router)
app.mount('#app')