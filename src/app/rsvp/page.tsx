"use client";

import Heading from "@/components/atoms/Heading";
import React from "react";
import addInvitation from "../actions/addInvitation";
import { useActionState } from "react";

const RSVPPage = () => {
  const [state, formAction] = useActionState(addInvitation, {
    status: 0,
  });

  return (
    <main className="p-8 w-full mx-auto max-w-6xl pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div className="md:order-last">
          <div className="p-8 border border-stone-200 md:w-2/3">
            <Heading level={3} className="text-5xl font-regular mb-4">
              Regalos
            </Heading>

            <p className="text-xl">
              Gracias por considerar hacer un regalo. Si deseas hacerlo, una
              contribución en efectivo sería muy apreciada.
            </p>
          </div>
        </div>
        <div className="md:px-20">
          <Heading level={2} className="text-5xl md:text-6xl font-regular mb-4">
            Confirma tu asistencia.
          </Heading>
          <p className="text-xl font-regular mb-6">
            Por favor, confirma tu asistencia antes del 15 de febrero.
          </p>
          <form action={formAction}>
            <div className="flex gap-4">
              <div className="flex gap-4 items-center justify-center">
                <input
                  type="radio"
                  id="confirm"
                  value="true"
                  name="confirmation"
                />
                <label htmlFor="confirm" className="text-lg">
                  Asistiré
                </label>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <input
                  type="radio"
                  id="reject"
                  value="false"
                  name="confirmation"
                />
                <label htmlFor="reject" className="text-lg">
                  No asistiré
                </label>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <label htmlFor="name" className="text-lg">
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-dark-brown rounded-md p-2"
              />
            </div>
            {state.status === 400 && (
              <p className="text-red-500  text-center mt-6">
                Por favor, completa todos los campos.
              </p>
            )}
            {state.status === 200 && (
              <p className="text-green-500 text-center mt-6">
                ¡Gracias por confirmar tu asistencia!
              </p>
            )}
            <button
              type="submit"
              className="inline-block mt-12 w-full text-base md:text-lg py-4 px-6 border border-dark-brown rounded-full text-dark-brown bg-white hover:bg-dark-brown hover:text-white transition-all"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RSVPPage;
