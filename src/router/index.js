import Vue from 'vue';
import VueRouter from 'vue-router';
import DownloadImage from '@/views/DownloadImage.vue';
import DownloadPdf from '@/views/DownloadPdf.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/download-image',
  },
  {
    path: '/download-image',
    name: 'download-image',
    component: DownloadImage,
  },
  {
    path: '/download-pdf',
    name: 'download-pdf',
    component: DownloadPdf,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
