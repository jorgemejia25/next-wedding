import { doc, updateDoc } from "firebase/firestore";

import { Status } from "@/app/enums/Status";
import { db } from "./firebaseConfig";

export const confirmData = async (
  docId: string,
  confirmedGuests: number,
  confirmation: boolean
) => {
  try {
    const docRef = doc(db, "invitations", docId);
    await updateDoc(docRef, {
      status: confirmation ? Status.ACCEPTED : Status.DECLINED,
      confirmedGuests,
    });
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
