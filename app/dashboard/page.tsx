import Container from "@/components/Container/Container";
import { getCurrentUser } from "@/utils/session";
import React, { useState } from "react";

type Props = {};

export default async function Dashboard({}: Props) {
  const user = await getCurrentUser();

  return (
    <main className="">
      <Container />
    </main>
  );
}
