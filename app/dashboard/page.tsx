import { getCurrentUser } from "@/utils/session";
import React, { useState } from "react";

type Props = {};

export default async function Dashboard({}: Props) {
  const user = await getCurrentUser();
  console.log(user);
  return <main className="">page</main>;
}
