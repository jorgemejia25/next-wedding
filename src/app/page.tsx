"use client";

import Colors from "@/components/dashboard/main/Colors";
import Confirmation from "@/components/dashboard/main/Confirmation";
import Countdown from "../../public/Countdown";
import Footer from "@/components/dashboard/main/Footer";
import Gifts from "@/components/dashboard/main/Gifts";
import Header from "@/components/dashboard/main/Header";
import Schedule from "@/components/dashboard/main/Schedule";

export default function Home() {
  return (
    <main>
      <Header />
      <Countdown />
      <Schedule />
      <Colors />
      <Gifts />
      {/* <Confirmation /> */}
      {/* <Footer /> */}
    </main>
  );
}
