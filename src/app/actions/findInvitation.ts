"use server";

import { Invitation } from "../interfaces/Invitation";
import { findDataById } from "@/firebase/findDataById";

const findInvitation = async (docId?: string): Promise<Invitation | null> => {
  if (!docId) {
    return null;
  }

  const invitation = await findDataById(docId);
  return invitation;
};

export default findInvitation;
