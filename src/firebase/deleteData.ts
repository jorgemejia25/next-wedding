import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const deleteData = async (id: string) => {
    try {
      const docRef = doc(db, "invitations", id);
      await deleteDoc(docRef);
    } catch (e) {
    }
}