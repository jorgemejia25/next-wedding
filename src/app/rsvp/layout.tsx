"use client";

import React, { Suspense } from "react";

const RSVPLoader = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default RSVPLoader;
