import CTA from "@/components/organisms/CTA"; // Importa el nuevo CTA
import Countdown from "@/components/organisms/Countdown"; // Importa el nuevo Countdown
import Header from "../components/organisms/Header";
import Intro from "@/components/organisms/Intro";
import React from "react";
import Schedule from "@/components/organisms/Schedule";
import Story from "@/components/organisms/Story";

const Page = () => {
  return (
    <>
      <Intro />
      <Header />

      <Schedule />
      <Story />
      <CTA />
    </>
  );
};

export default Page;
