"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "../Navbar";

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
        </>
      ) : (
        <> {children}</>
      )}
    </>
  );
};
