import CTA from "@/components/Pages/LandingPage/CTA";
import Intro from "@/components/Pages/LandingPage/Intro";
import Jumbotron from "@/components/Pages/LandingPage/Jumbotron";
import Testimoni from "@/components/Pages/LandingPage/Testimoni";
import Trending from "@/components/Pages/LandingPage/Trending";
import VideoPicture from "@/components/Pages/LandingPage/VideoPicture";

export default function Home() {
  return (
    <main className={`overflow-hidden`}>
      <Jumbotron />
      <Intro />
      <Trending />
      <CTA />
      <VideoPicture />
      <Testimoni />
    </main>
  );
}
