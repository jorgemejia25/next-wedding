import { doc, updateDoc } from "firebase/firestore";

import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const updateData = async (docId: string, newData: Invitation) => {
  try {
    const docRef = doc(db, "invitations", docId);
    await updateDoc(docRef, newData as any); // add 'as any' to bypass the type check
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
