"use client";

import { ReactNode } from "react";
import { SessionProvider as SessionNextAuth } from "next-auth/react";

type Props = {
  children: ReactNode;
};

export default function SessionProvider({ children }: Props) {
  return <SessionNextAuth>{children}</SessionNextAuth>;
}
