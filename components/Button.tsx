"use client";
import React from "react";
import axios from "axios";
import { axiosInstance } from "@/utils/axiosIntance";

type Props = {
  allIds: number[];
  userId: number;
};

export default function Button({ allIds, userId }: Props) {
  const onCheckout = async () => {
    const { data } = await axiosInstance.post("/api/checkout", {
      productIds: allIds,
      userId: userId,
    });
    window.location = data.url;
  };
  return (
    <div className="flex items-center justify-center mt-20 cursor-pointer">
      <button
        onClick={onCheckout}
        className="px-10 py-2 text-white bg-purple-600 rounded-full"
      >
        Checkout
      </button>
    </div>
  );
}
