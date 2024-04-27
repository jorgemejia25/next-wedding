import { collection, getDocs, query, where } from "firebase/firestore";

import { Invitation } from "./../app/interfaces/Invitation";
import { Status } from "@/app/enums/Status";
import { db } from "./firebaseConfig";

export const findData = async (
  searchText?: string,
  status?: Status | string
): Promise<Invitation[]> => {
  try {
    const invitationsCollection = collection(db, "invitations");
    let invitationsQuery = query(invitationsCollection);

    if (searchText) {
      invitationsQuery = query(
        invitationsCollection,
        where("name", ">=", searchText)
      );
    }

    if (status) {
      invitationsQuery = query(
        invitationsCollection,
        where("status", "==", status)
      );
    }

    const querySnapshot = await getDocs(invitationsQuery);
    const invitations: Invitation[] = [];

    querySnapshot.forEach((doc) => {
      const invitation = doc.data() as Invitation;
      invitation.id = doc.id;
      invitations.push(invitation);
    });

    return invitations;
  } catch (error) {
    console.error("Error finding data:", error);
    return [];
  }
}
