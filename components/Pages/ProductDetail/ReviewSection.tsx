"use client";
import React from "react";
import ReactStars from "react-rating-star-with-type";

type Props = {
  rating: number;
  comment: string;
  productId: number;
  userId: number;
};

export default function ReviewSection({
  rating,
  comment,
  productId,
  userId,
}: Props) {
  return (
    <div>
      <ReactStars
        value={rating}
        isEdit={true}
        activeColors={["red", "#f55185", "#FFCE00", "#f28438", "#f97316"]}
      />
      <p className="mt-2">{comment}</p>
    </div>
  );
}
