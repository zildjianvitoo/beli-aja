"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactStars from "react-rating-star-with-type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/utils/axiosIntance";

type Props = {
  productId?: number;
  userId?: number;
};

export default function Review({ productId, userId }: Props) {
  const router = useRouter();

  const reviewFormDefaultValue = {
    star: 0,
    comment: "",
    productId: productId,
    userId: userId,
  };

  const [reviewForm, setReviewForm] = useState(reviewFormDefaultValue);

  const onReviewStarChangeHandler = (nextValue: any) => {
    setReviewForm((prevStar) => ({
      ...prevStar,
      star: nextValue,
    }));
  };

  const onReviewFormChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setReviewForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/api/review", reviewForm);
      setReviewForm(reviewFormDefaultValue);
      console.log(data);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <h1 className="text-xl font-medium mb-4">Beri ulasan Anda</h1>
        <h2 className="mb-2 ">Beri Rating</h2>
        <ReactStars
          onChange={onReviewStarChangeHandler}
          value={reviewFormDefaultValue.star}
          size={17}
          activeColors={["red", "#f55185", "#FFCE00", "#f28438", "#f97316"]}
          isEdit
        />
        <h2 className="mt-4">Tulis ulasanmu disini</h2>
        <div className="">
          <input
            type="text"
            className="border border-orange-300 rounded-lg w-full h-10 focus:border-orange-500 outline-none  px-2 mt-2"
            name="comment"
            value={reviewForm.comment}
            onChange={onReviewFormChangeHandler}
          />
        </div>
        <button className=" px-5 p-2 border bg-primary-beliAja text-white rounded-lg mt-5">
          Buat ulasan
        </button>
      </form>
    </section>
  );
}
