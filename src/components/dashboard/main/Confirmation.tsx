import { Cookie, Croissant_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "../../Button";
import ConfirmDialogue from "../../atoms/ConfirmDialogue";
import { Invitation } from "@/app/interfaces/Invitation";
import { Status } from "@/app/enums/Status";
import Title from "../../atoms/Title";
import { cancelData } from "@/firebase/cancelData";
import { confirmData } from "@/firebase/confirmData";
import { findDataById } from "@/firebase/findDataById";
import { isBefore } from "date-fns";
import { useForm } from "react-hook-form";

type ConfirmationFormData = {
  guests: number;
};

const Croissant = Croissant_One({
  weight: ["400"],
  subsets: ["latin"],
});

const cookie = Cookie({
  weight: ["400"],
  subsets: ["latin"],
});

const Confirmation = () => {
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
  const [guests, setGuests] = useState(0);

  const currentDate = new Date();
  const eventDate = new Date("2023-10-16");

  const shouldRender = isBefore(currentDate, eventDate);

  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(id);
    if (id) {
      const fetchInvitation = async () => {
        const invitation = await findDataById(id);
        setInvitation(invitation);
      };
      fetchInvitation();
    }
  }, [id]);

  useEffect(() => {
    const id = searchParams.get("id");

    setId(id);
  }, [searchParams]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmationFormData>();

  const handleFormSubmit = (data: ConfirmationFormData) => {
    setIsConfirmDialogOpen(true);
    setGuests(data.guests);
  };

  const handleCancel = async () => {
    setIsConfirmDialogOpen(false);
    setIsCancelDialogOpen(false);

    await cancelData(id!);
    setInvitation({
      ...invitation!,
      status: Status.DECLINED,
    });
  };

  const handleConfirm = async () => {
    setIsCancelDialogOpen(false);

    setIsConfirmDialogOpen(false);
    await confirmData(id!, guests);
    setInvitation({
      ...invitation!,
      guests,
      status: Status.ACCEPTED,
    });
  };

  return (
    invitation && (
      <>
        <section className="flex mt-5 flex-col text-center items-center justify-center relative">
          <Title src="/title3.jpg" label="Asistencia" />

          <>
            <div
              className={`mt-5 mx-5 text-center max-w-md tracking-widest text-lg font-medium`}
            >
              Con el fin de garantizar una experiencia organizada y especial en
              nuestro día, te pedimos amablemente que confirmes tu asistencia
              junto con tus invitados antes del 16 de octubre. <br /> <br />
              Los niños son tan lindos, pero a veces son más lindos dormidos,
              mientras los papás bailan toda la noche. ¡Los esperamos en nuestra
              boda! así que buenas noches a los niños, y bienvenidos a los
              papás.
            </div>
            <div className="mt-8 font-semibold tracking-widest uppercase">
              Nombre:
            </div>
            <div
              className={`${cookie.className} mt-1 font-bold underline text-6xl`}
            >
              {invitation.name}
            </div>
            <div className="mt-8 font-semibold tracking-widest uppercase">
              Pases disponibles:
            </div>
            <div className={`${cookie.className} mt-1 font-bold text-6xl`}>
              {invitation.guests}
            </div>
            <div className="mt-1 font-semibold tracking-widest uppercase">
              Invitados confirmados:
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col text-center items-center justify-center"
            >
              <input
                type="number"
                placeholder="Pases"
                className="mt-3 w-72 border-input rounded-lg p-2"
                {...register("guests", { required: true, min: 1 })}
              />
              {errors.guests && errors.guests.type === "required" && (
                <span className="mt-7 font-bold text-red-400 uppercase tracking-wider">
                  Por favor, marque la cantidad de invitados.
                </span>
              )}
              {errors.guests && errors.guests.type === "min" && (
                <span className="mt-7 font-bold text-red-400 uppercase tracking-wider">
                  Seleccione al menos un invitado.
                </span>
              )}

              {invitation.status === Status.ACCEPTED && (
                <span className="mt-7 font-bold text-green-400 uppercase tracking-wider">
                  Ya has confirmado tu asistencia.
                </span>
              )}

              {invitation.status === Status.DECLINED && (
                <span className="mt-7 font-bold text-red-400 uppercase tracking-wider">
                  Ya has cancelado tu asistencia.
                </span>
              )}
              <Button
                className="mt-7 w-64"
                state="primary-light"
                rounded="lg"
                type="submit"
              >
                <p className="text-center">Asistiré</p>
              </Button>
              <Button
                className="mt-5 mb-12 w-64"
                state="secondary-light"
                rounded="lg"
                onClick={() => setIsCancelDialogOpen(true)}
              >
                <p className="text-center">No asistiré</p>
              </Button>
            </form>
            <ConfirmDialogue
              title="Confirmar asistencia"
              message="¿Estás seguro de que quieres confirmar tu asistencia?"
              onConfirm={handleConfirm}
              onCancel={() => setIsConfirmDialogOpen(false)}
              confirmButtonLabel="Confirmar"
              cancelButtonLabel="Cancelar"
              confirmButtonClass="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded mr-2"
              isOpen={isConfirmDialogOpen}
            />
            <ConfirmDialogue
              title="Cancelar asistencia"
              message="¿Estás seguro de que no asistirás?"
              onConfirm={handleCancel}
              onCancel={() => setIsCancelDialogOpen(false)}
              confirmButtonLabel="Confirmar"
              cancelButtonLabel="Cancelar"
              confirmButtonClass="bg-red-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded mr-2"
              isOpen={isCancelDialogOpen}
            />
          </>
        </section>
      </>
    )
  );
};

export default Confirmation;
