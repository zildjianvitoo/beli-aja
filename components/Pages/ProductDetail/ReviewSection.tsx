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
        activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
      />
      <p className="mt-2">{comment}</p>
    </div>
  );
}
