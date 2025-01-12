import { collection, getDocs, query, where } from "firebase/firestore";
import { Invitation } from "@/app/interfaces/Invitation";
import { db } from "./firebaseConfig";

export const getData = async (status?: boolean): Promise<Invitation[]> => {
  try {
    const invitationsCollection = collection(db, "invitations");

    let querySnapshot;
    if (status !== undefined) {
      querySnapshot = await getDocs(
        query(invitationsCollection, where("confirmation", "==", status))
      );
    } else {
      querySnapshot = await getDocs(invitationsCollection);
    }

    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as Invitation[];

    return data;
  } catch (e) {
    console.error("Error getting document: ", e);
    return [];
  }
};