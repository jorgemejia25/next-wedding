import { collection, getDocs, query, where } from "firebase/firestore";

import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const getData = async (status?: boolean): Promise<Invitation[]> => {
  try {
    const invitationsCollection = collection(db, "invitations");

    if (status) {
      const querySnapshot = await getDocs(
        query(invitationsCollection, where("confirmation", "==", status))
      );

      const data = querySnapshot.docs.map((doc) => doc.data() as Invitation);

      return data;
    }

    const querySnapshot = await getDocs(invitationsCollection);

    const data = querySnapshot.docs.map((doc) => doc.data() as Invitation);

    return data;
  } catch (e) {
    console.error("Error getting document: ", e);

    return [];
  }
};
