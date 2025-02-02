"use client";

import React, { Suspense, useEffect, useState } from "react";

import Heading from "@/components/atoms/Heading";
import { Invitation } from "../interfaces/Invitation";
import addInvitation from "../actions/addInvitation";
import addTextToPNG from "../actions/addTextToPNG"; // Importar la acción
import findInvitation from "../actions/findInvitation";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

const RSVPPage = () => {
  const [state, formAction] = useActionState(addInvitation, {
    status: 0,
  });

  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [guests, setGuests] = useState<number | undefined>(undefined);
  const searchParams = useSearchParams();
  const invitationId = searchParams.get("id");

  useEffect(() => {
    const fetchInvitation = async () => {
      if (invitationId) {
        const invitation = await findInvitation(invitationId);
        setInvitation(invitation);
      }
    };

    fetchInvitation();
  }, [invitationId]);

  const handleGuestsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuests(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const guests = parseInt(formData.get("guests") as string, 10);

    if (guests > (invitation?.guests || 0)) {
      event.preventDefault();
      setError(`El número máximo de invitados es ${invitation?.guests}`);
    } else if (guests <= 0) {
      event.preventDefault();
      setError("El número de invitados debe ser mayor que 0");
    } else {
      setError(null);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="p-8 w-full mx-auto max-w-6xl pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="md:order-last">
            <div className="p-8 border border-stone-200 md:w-2/3">
              <Heading level={3} className="text-5xl font-regular mb-4">
                Regalos
              </Heading>

              <p className="text-lg">
                Tu presencia es nuestro mejor regalo. Si deseas contribuir de
                otra manera, puedes realizar una aportación en sobre o por medio
                de transferencia a la siguiente cuenta:
              </p>
              <p className="text-lg mt-4">
                Banco: BAC
                <br />
                Cuenta de ahorros: 966900243
                <br />
                Titular: César Gabriel González Carranza
              </p>
            </div>
          </div>
          {invitation && (
            <div className="md:px-20">
              <Heading
                level={2}
                className="text-5xl md:text-6xl font-regular mb-4"
              >
                Confirma tu asistencia.
              </Heading>
              <p className="text-xl font-regular mb-6">
                Invitado: {invitation?.name}
              </p>
              <p className="text-xl font-regular mb-6">
                Miembros de nucleo familiar: {invitation?.guests}
              </p>
              <form action={formAction} onSubmit={handleSubmit}>
                <input type="hidden" name="docId" value={invitation?.id} />
                <div className="flex gap-4">
                  <div className="flex gap-4 items-center justify-center">
                    <input
                      type="radio"
                      id="confirm"
                      value="true"
                      name="confirmation"
                      required
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
                      required
                    />
                    <label htmlFor="reject" className="text-lg">
                      No asistiré
                    </label>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <label htmlFor="guests" className="text-lg">
                    Acompañantes confirmados
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={guests ?? ""}
                    onChange={handleGuestsChange}
                    className="border border-dark-brown rounded-md p-2"
                    required
                    min="1"
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-center mt-6">{error}</p>
                )}
                {state.status === 400 && (
                  <p className="text-red-500 text-center mt-6">
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
          )}
        </div>
      </main>
    </Suspense>
  );
};

export default RSVPPage;
