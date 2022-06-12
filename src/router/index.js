import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import("../view/HomeView.vue") },
    { path: '/about', component: () => import("../view/AboutView.vue")},
    { path: '/realProducts', component: () => import("../view/RealProductsView.vue")},
    { path: '/nftProducts', component: () => import("../view/NftProductsView.vue")},
  ]
});

export default router;