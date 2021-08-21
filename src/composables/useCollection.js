import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

//we put error inside because there may be different errors for different collections
//we place collection in param to pass different collection
const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
