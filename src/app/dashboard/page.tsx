"use client";

import { TfiEye, TfiPencil } from "react-icons/tfi";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import CustomDropdown from "@/components/CustomDropdown";
import { FiCopy } from "react-icons/fi";
import { Invitation } from "../interfaces/Invitation";
import Link from "next/link";
import { Status } from "../enums/Status";
import { findData } from "@/firebase/findData";

export default function Page() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await findData(searchText, filter);
      setInvitations(data);
    };
    fetchData();
  }, [searchText, filter]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const copyUrlToClipboard = (id: string) => {
    const url = `https://www.bodaelsaydavid.com/?id=${id}`;

    navigator.clipboard.writeText(url);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center text-gray-900">
        Panel de administrador
      </h1>
      <div className="mt-6">
        <Link href={{ pathname: "/dashboard/create" }}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear invitación
          </button>
        </Link>
      </div>
      <div className="mt-6 grid w-full gap-3 grid-cols-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchText}
          onChange={handleSearch}
          className="block w-full border col-span-3 border-gray-200 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />

        <CustomDropdown
          defaultOption={{
            value: "",
            label: "Todos",
          }}
          options={[
            {
              value: "",
              label: "Todos",
            },
            {
              value: Status.PENDING,
              label: "Pendientes",
            },
            {
              value: Status.DECLINED,
              label: "Aceptados",
            },
            {
              value: Status.ACCEPTED,
              label: "Rechazados",
            },
          ]}
          handleChange={(option) => setFilter(option!.value)}
        />
      </div>
      <div className="mt-6">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Invitados</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invitation, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{invitation.name}</td>
                <td className="border px-4 py-2">{invitation.guests}</td>
                <td className="border px-4 py-2">{invitation.status}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-4 items-center justify-center">
                    <Link
                      href={`/dashboard/update?id=${invitation.id}
                    `}
                    >
                      <Button rounded="full" state="primary-light">
                        <TfiPencil />
                      </Button>
                    </Link>{" "}
                    <Link
                      href={`/?id=${invitation.id}
                    `}
                    >
                      <Button rounded="full" state="secondary-light">
                        <TfiEye />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => copyUrlToClipboard(invitation.id!)}
                      rounded="full"
                      state="secondary-light"
                    >
                      <FiCopy />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
