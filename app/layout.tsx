import NavBar from "@/app/ui/navigation/NavBar";
import type { Layout } from "@/app/lib/definitions.types";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Learn To Code !",
  description: "Learn to code in this site !",
};

const RootLayout: Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
