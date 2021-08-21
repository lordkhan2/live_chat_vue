import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

//import firebase auth service
import { projectAuth } from "./firebase/config";
//check to see if there is value in app then render
//we do this to give time to firebase auth
let app;

projectAuth.onAuthStateChanged(() => {
  if (!app)
    [
      (app = createApp(App)
        .use(router)
        .mount("#app")),
    ];
});
