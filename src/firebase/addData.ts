import { addDoc, collection } from "firebase/firestore";

import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const addData = async (data: Invitation) => {
  try {
    const docRef = await addDoc(collection(db, "invitations"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
