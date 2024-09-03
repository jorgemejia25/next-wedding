"use client";

import React, { useState } from "react";

import { Status } from "@/app/enums/Status";
import { addData } from "@/firebase/addData";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  name: string;
  guests: number;
  status: Status;
  
};

const Page: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    defaultValues: {
      status: Status.PENDING,
    },
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    await addData(data);

    // redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Crear invitación</h1>
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
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {formState.isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
