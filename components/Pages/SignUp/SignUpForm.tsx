"use client";
import { axiosInstance } from "@/utils/axiosIntance";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, FormEvent } from "react";
import { toast } from "react-toastify";

type Props = {};

export default function SignUpForm({}: Props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const onUserFieldChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    console.log(user);
    e.preventDefault();
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    const { data } = await axiosInstance.post("/api/register", body);
    toast.success("Berhasil daftar");
    console.log(data);
    router.push("/masuk");
    try {
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        toast.error(error.message);
        return;
      }
      toast.error("Terjadi kesalahan");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-2">
      <form
        className="p-10 rounded-lg shadow-lg flex flex-col"
        onSubmit={onSubmitHandler}
      >
        <h1 className="text-xl font-medium mb-4">Daftar</h1>
        <label htmlFor="name" className="mb-2">
          Nama
        </label>
        <input
          type="text"
          className="p-2 border-gray-300 border rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          placeholder="Nama"
          id="name"
          value={user.name}
          onChange={onUserFieldChangeHandler}
        />
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
          className="py-2  text-white border bg-purple-600 border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600 rounded-md opacity-80 hover:opacity-100"
        >
          Daftar Sekarang
        </button>
        <p className="text-sm text-center mt-5 text-neutral-600">
          Sudah punya akun?
        </p>
        <Link
          href={"/masuk"}
          className="text-center mt-2 text-purple-600 opacity-80 hover:opacity-100"
        >
          Masuk
        </Link>
      </form>
    </section>
  );
}
