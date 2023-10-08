import Intro from "@/components/Pages/LandingPage/Intro";
import Jumbotron from "@/components/Pages/LandingPage/Jumbotron";
import Trending from "@/components/Pages/LandingPage/Trending";
import { montserrat } from "@/public/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Jumbotron />
      <Intro />
      <Trending />
      <div className="my-32"></div>
    </main>
  );
}
