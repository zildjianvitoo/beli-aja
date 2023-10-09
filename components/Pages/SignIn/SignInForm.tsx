"use client";
import React, { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

type Props = {};

export default function SignInForm({}: Props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onUserFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const router = useRouter();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
      toast.success("Login berhasil");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-2">
      <form
        className="p-10 rounded-lg shadow-lg flex flex-col"
        onSubmit={onSubmitHandler}
      >
        <h1 className="text-xl font-medium mb-4">Masuk</h1>

        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={onUserFieldChangeHandler}
        />
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          type="password"
          className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          placeholder="Kata Sandi"
          id="password"
          value={user.password}
          onChange={onUserFieldChangeHandler}
        />
        <button
          type="submit"
          className="py-2  text-white border bg-primary-beliAja border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 rounded-md opacity-80 hover:opacity-100"
        >
          Login
        </button>
        <p className="text-sm text-center mt-5 text-neutral-600">
          Belum punya akun?
        </p>
        <Link
          href={"/daftar"}
          className="text-center mt-2 text-primary-beliAja opacity-80 hover:opacity-100"
        >
          Daftar
        </Link>
      </form>
    </section>
  );
}
