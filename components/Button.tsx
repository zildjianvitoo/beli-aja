"use client";
import React from "react";
import axios from "axios";

type Props = {
  allIds: number[];
  userId: number;
};

export default function Button({ allIds, userId }: Props) {
  return (
    <div className="flex items-center justify-center mt-20 cursor-pointer">
      <span className="px-10 py-2 text-white bg-purple-600 rounded-full">
        Checkout
      </span>
    </div>
  );
}
