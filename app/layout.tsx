import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Greenlight | Trauma Relief & Recovery · Mesa, AZ",
  description: "Greenlight uses the ART method to help you overcome trauma, PTSD, anxiety and grief. Fast, private, practitioner-guided sessions in Mesa, AZ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
