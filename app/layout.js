import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { inter } from "@/fonts";
import { galano } from "@/fonts";

export const metadata = {
  title: "KEAS Gebze 5S SAHA DENETIM",
  description:
    "5S saha denetlemelerinin kayıt altında tutulması amacıyla yapılmıştır. Altuğ Engin Ocak 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.galano}>{children}</body>
    </html>
  );
}
