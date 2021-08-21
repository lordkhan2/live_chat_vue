import { ref } from "vue";
import { projectAuth } from "../firebase/config";

// refs & signup outside of exported function
// they don't need to be re-created every time we invoke useSignup
const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete signup");
    }
    //after taking in pass and email we update the displayname, this is how we can update some fields(firebase fielsa) for sign up in firebase
    await res.user.updateProfile({ displayName });
    error.value = null;
    //console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
