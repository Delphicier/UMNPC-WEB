import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/Home.vue";
import AboutView from "../view/AboutUs.vue";
import ProgramsView from "../view/Programs.vue";
import ContactView from "../view/ContactUs.vue";

const routes = [
    { path: "/", name: "Home", component: HomeView },
    { path: "/about", name: "About", component: AboutView },
    { path: "/programs", name: "Programs", component: ProgramsView },
    { path: "/contact", name: "Contact", component: ContactView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
