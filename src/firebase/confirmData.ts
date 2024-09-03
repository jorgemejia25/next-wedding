import { doc, updateDoc } from "firebase/firestore";

import { Status } from "@/app/enums/Status";
import { db } from "./firebaseConfig";

export const confirmData = async (
  docId: string,
  guests: number,
  confirmedGuests: string
) => {
  try {
    const docRef = doc(db, "invitations", docId);
    await updateDoc(docRef, {
      status: Status.ACCEPTED,
      guests,
      confirmedGuests,
    });
    console.log("Document updated successfully");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
