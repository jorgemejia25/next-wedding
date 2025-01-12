"use server";

import { deleteData } from "@/firebase/deleteData";

const deleteInvitation = async (
  _: {
    status: number;
  },
  formData: FormData
) => {
  const id = formData.get("id") as string;

  if (id === "") {
    return {
      status: 400,
    };
  }

  await deleteData(id);

  return {
    status: 200,
  };
};

export default deleteInvitation;