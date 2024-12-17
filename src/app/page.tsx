
import HeroParallaxDemo from "@/app/Frontend/Move";
import CardCollection  from "./Frontend/Animated";
import GlitchSection  from "./Frontend/GlitchSection";
import BentoGridDemo  from "./Frontend/BentoGridDemo";

export default function Home() {
  return (
      <>
        <HeroParallaxDemo/>
        <h1 className="tracking-tighter mt-20 pb-5 text-center text-7xl sm:text-4xl">What is Additional ?</h1>
        <CardCollection/>
        <GlitchSection/>
        <BentoGridDemo/>
      </>
  );
}
