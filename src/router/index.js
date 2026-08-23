import {
  createRouter,
  createWebHistory,
} from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        description:
          "Focused legal advice and representation for businesses, institutions and individuals in Somalia.",
      },
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About",
        description:
          "Learn about Xamar Law Office and our approach to legal counsel in Somalia.",
      },
    },

    {
      path: "/services",
      name: "services",
      component: ServicesView,
      meta: {
        title: "Services",
        description:
          "Explore Xamar Law Office services for businesses, institutions and individuals.",
      },
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact",
        description:
          "Contact Xamar Law Office in Mogadishu by email.",
      },
    },
  ],
});

export default router;