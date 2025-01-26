"use client";

import React, { Suspense } from "react";

const Loader = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default Loader;
