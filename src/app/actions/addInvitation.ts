"use server";

import { confirmData } from "@/firebase/confirmData";

const addInvitation = async (
  _: {
    status: number;
  },
  formData: FormData
) => {
  const guests = +formData.get("guests")!;
  const confirmation = formData.get("confirmation") === "true";
  const docId = formData.get("docId") as string;

  if (formData.get("confirmation") === null || isNaN(guests)) {
    return {
      status: 400,
    };
  }

  console.log(guests);
  console.log(confirmation);

  await confirmData(docId, guests, confirmation);

  return {
    status: 200,
  };
};

export default addInvitation;
