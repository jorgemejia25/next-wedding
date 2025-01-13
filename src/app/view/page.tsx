"use client";

import React, { useEffect, useState } from "react";

import Heading from "@/components/atoms/Heading";
import { Invitation } from "../interfaces/Invitation";
import deleteInvitation from "../actions/deleteInvitation";
import getInvitations from "../actions/getInvitations";

const PageView = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const fetchedInvitations = await getInvitations();
      setInvitations(fetchedInvitations);
    })();
  }, []);



  const deletebutton = async (id: string, name: string) => {
    const formData = new FormData();
    formData.append("id", id);

    const response = await deleteInvitation({ status: 200 }, formData);
    if (response.status === 200) {
      setInvitations(invitations.filter(invitation => invitation.id !== id));
      setMessage(`Invitado: ${name} eliminado correctamente`);
      setTimeout(() => setMessage(null), 3000); 
    }
  };

  return (
    <main className="p-8 md:px-32">
      <Heading level={2} className="text-5xl md:text-6xl font-regular mb-4">
        Ver invitados
      </Heading>

      {message && (
        <div className="mb-4 p-4 text-green-700">
          {message}
        </div>
      )}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Confirmación</th>
            <th className="border border-gray-300 p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((invitation) => (
            <tr key={invitation.id} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{invitation.name}</td>
              <td className="border border-gray-300 p-2">
                {invitation.confirmation ? "Sí" : "No"}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => deletebutton(invitation.id!, invitation.name)}
                  className="text-red-600 hover:text-red-800"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default PageView;