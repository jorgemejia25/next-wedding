import Footer from "@/components/molecules/Footer";
import Header from "../components/organisms/Header";
import React from "react";
import Schedule from "@/components/organisms/Schedule";
import Story from "@/components/organisms/Story";

const Page = () => {
  return (
    <>
      <Header />
      <Schedule />
      <Story />
    </>
  );
};

export default Page;
