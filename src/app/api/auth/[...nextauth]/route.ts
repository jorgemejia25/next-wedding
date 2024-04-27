import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

/** @type {*} */
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: { label: "User", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (
          (credentials as any).user === "admin" &&
          (credentials as any).password === "admin"
        ) {
          return { id: 1, name: "Admin" };
        } else {
          return null;
        }
      },
    }),
    {
      secret: process.env.NEXT_PUBLIC_SECRET,
    },
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  jwt: {
    secret: process.env.NEXT_PUBLIC_SECRET,
  },
  callbacks: {
    async redirect(url: any, baseUrl: any) {
      return "/dashboard"; // Redirige a la página /dashboard después del inicio de sesión
    },
  },
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
