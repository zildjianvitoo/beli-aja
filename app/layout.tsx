import ToastProvider from "@/components/Provider/ToastProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import SessionProvider from "@/components/Provider/SessionProvider";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BeliAja",
  description: "BeliAja - Belanja Online Aman dan Nyaman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <SessionProvider>
          {children}
          <ToastProvider />
        </SessionProvider>
      </body>
    </html>
  );
}
