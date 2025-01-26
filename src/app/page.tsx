import React, { Suspense } from "react";

import CTA from "@/components/organisms/CTA"; // Importa el nuevo CTA
import Countdown from "@/components/organisms/Countdown"; // Importa el nuevo Countdown
import Header from "../components/organisms/Header";
import Intro from "@/components/organisms/Intro";
import Schedule from "@/components/organisms/Schedule";
import Story from "@/components/organisms/Story";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Intro />
      <Header />
      <Schedule />
      <Story />
      <CTA />
    </Suspense>
  );
};

export default Page;
