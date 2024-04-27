import { doc, updateDoc } from "firebase/firestore";

import { Status } from "@/app/enums/Status";
import { db } from "./firebaseConfig";

export const cancelData = async (docId: string) => {
  try {
    const docRef = doc(db, "invitations", docId);
    await updateDoc(docRef, {
      status: Status.DECLINED,
      guests: 0,
    });
    console.log(docRef);
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
