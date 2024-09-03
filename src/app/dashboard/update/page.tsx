"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Invitation } from "@/app/interfaces/Invitation";
import { Status } from "@/app/enums/Status";
import { findDataById } from "@/firebase/findDataById";
import { removeData } from "@/firebase/removeData";
import { updateData } from "@/firebase/updateData";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  guests: number;
  status: Status;
  confirmedGuests: string;
};

const UpdateInvitationPage = () => {
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [id, setId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const { register, handleSubmit, formState, setValue } = useForm<FormData>({
    defaultValues: {
      status: Status.PENDING,
      confirmedGuests: "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchInvitation = async () => {
        const invitation = await findDataById(id);
        setInvitation(invitation);

        // set form values
        if (invitation) {
          setValue("name", invitation.name);
          setValue("guests", invitation.guests);
          setValue("confirmedGuests", invitation.confirmedGuests!);
          setValue("status", invitation.status);
        }
      };
      fetchInvitation();
    }
  }, [id, setValue]);

  const router = useRouter();

  useEffect(() => {
    const id = searchParams.get("id");

    setId(id);
  }, [searchParams]);

  if (!invitation) {
    return <div>Loading...</div>;
  }

  const onSubmit = async (data: FormData) => {
    // update invitation
    await updateData(id!, data);

    // redirect to dashboard
    router.push("/dashboard");
  };

  const deleteInvitation = async () => {
    // delete invitation
    await removeData(id!);

    // redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Editar invitación</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formState.errors.name && (
            <p className="text-red-500 mt-2">El nombre es requerido</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="guests"
            className="block text-gray-700 font-bold mb-2"
          >
            Invitados
          </label>
          <input
            type="number"
            id="guests"
            {...register("guests", { required: true, min: 1 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formState.errors.guests && (
            <p className="text-red-500 mt-2">Debe haber al menos un invitado</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-gray-700 font-bold mb-2"
          >
            Estado
          </label>
          <select
            id="status"
            {...register("status", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value={Status.PENDING}>Pendiente</option>
            <option value={Status.ACCEPTED}>Aceptado</option>
            <option value={Status.DECLINED}>Rechazado</option>
          </select>
          {formState.errors.status && (
            <p className="text-red-500 mt-2">El estado es requerido</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmedGuests"
            className="block text-gray-700 font-bold mb-2"
          >
            Invitados confirmados
          </label>
          <input
            type="text"
            id="confirmedGuests"
            {...register("confirmedGuests", { required: false })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formState.errors.confirmedGuests && (
            <p className="text-red-500 mt-2">
              Los invitados confirmados son requeridos
            </p>
          )}
        </div>
        <div className="mb-4">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {formState.isSubmitting ? "Enviando..." : "Actualizar"}
          </button>
        </div>{" "}
        <div className="mb-4">
          <button
            type="button"
            onClick={deleteInvitation}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            {formState.isSubmitting ? "Enviando..." : "Eliminar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateInvitationPage;
