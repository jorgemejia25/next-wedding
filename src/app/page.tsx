import Header from "../components/organisms/Header";
import React from "react";
import Schedule from "@/components/organisms/Schedule";
import Story from "@/components/organisms/Story";
import CTA from "@/components/organisms/CTA"; // Importa el nuevo CTA

const Page = () => {
  return (
    <>
      <Header />
      <Schedule />
      <Story />
      <CTA />
    </>
  );
};

export default Page;
