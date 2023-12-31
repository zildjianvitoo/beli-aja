"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "../Navbar";
import "aos/dist/aos.css";
import Footer from "../Footer";

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const requiredPathName = () => {
    if (pathname === "/" || pathname === "/kontak" || pathname === "/produk") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {requiredPathName() ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <> {children}</>
      )}
    </>
  );
};
