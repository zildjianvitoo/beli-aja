"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return <ToastContainer position={toast.POSITION.TOP_CENTER} theme="light" />;
}
