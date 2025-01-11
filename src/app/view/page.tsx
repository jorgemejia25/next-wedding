"use client";

import React, { useEffect, useState } from "react";

import Heading from "@/components/atoms/Heading";
import { Invitation } from "../interfaces/Invitation";
import getInvitations from "../actions/getInvitations";

const PageView = () => {
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedInvitations = await getInvitations();
      setInvitations(fetchedInvitations);
    })();
  }, []);

  return (
    <main className="p-8 md:px-32">
      <Heading level={2} className="text-5xl md:text-6xl font-regular mb-4">
        Ver invitados
      </Heading>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Confirmación</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((invitation) => (
            <tr key={invitation.name} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-300 p-2">{invitation.name}</td>
              <td className="border border-gray-300 p-2">
                {invitation.confirmation ? "Sí" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default PageView;
