import { ref } from "vue";
import { projectAuth } from "../firebase/config";

//projectAuth.currentUser if they are logged in user shows if not null at initialization
const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
  console.log("User state change. Current user is: ", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
