"use server";

import { Invitation } from "../interfaces/Invitation";
import { addData } from "@/firebase/addData";

const addInvitation = async (
  _: {
    status: number;
  },
  formData: FormData
) => {
  const name = formData.get("name") as string;

  const confirmation = formData.get("confirmation") === "true";
  const invitation: Invitation = { name, confirmation };

  if (name === "" || formData.get("confirmation") === null) {
    return {
      status: 400,
    };
  }

  const createdInvitation = await addData(invitation);

  console.log(createdInvitation);

  return {
    status: 200,
  };
};

export default addInvitation;
