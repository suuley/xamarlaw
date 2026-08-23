import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const descriptionMeta = document.querySelector(
  'meta[name="description"]'
);

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | Xamar Law Office`
    : "Xamar Law Office | Legal Counsel in Somalia";

  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute(
      "content",
      to.meta.description
    );
  }

  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
});

createApp(App)
  .use(router)
  .mount("#app");