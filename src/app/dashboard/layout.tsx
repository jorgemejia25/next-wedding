"use client";

import Loading from "@/components/dashboard/Loading";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />;
  }

  if (!session) {
    // redirect to login page
    router.push("/api/auth/signéin");
  }

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
