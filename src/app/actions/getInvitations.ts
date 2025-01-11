"use server";

import { Invitation } from "../interfaces/Invitation";
import { getData } from "@/firebase/getData";

const getInvitations = async (status?: boolean) => {
  const invitations = await getData(status);

  return invitations;
};

export default getInvitations;
