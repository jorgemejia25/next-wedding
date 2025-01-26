import { doc, getDoc } from "firebase/firestore";

import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const findDataById = async (
  docId?: string
): Promise<Invitation | null> => {
  if (!docId) {
    return null;
  }

  try {
    const docRef = doc(db, "invitations", docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const invitation = docSnap.data() as Invitation;
      invitation.id = docSnap.id;
      return invitation;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error finding data: ", error);
    return null;
  }
};
