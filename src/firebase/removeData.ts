import { deleteDoc, doc } from "firebase/firestore";

import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const removeData = async (docId: string) => {
  try {
    const docRef = doc(db, "invitations", docId);

    await deleteDoc(docRef);

    console.log("Document deleted successfully");
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
