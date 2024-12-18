
import HeroParallaxDemo from "@/app/Frontend/Move";
import CardCollection  from "./Frontend/Animated";
import GlitchSection  from "./Frontend/GlitchSection";
import BentoGridDemo  from "./Frontend/BentoGridDemo";

export default function Home() {
  return (
      <>
        <HeroParallaxDemo/>
        <h1 className="tracking-tighter mt-20 pb-5 text-center text-5xl lg:text-7xl">What is Additional ?</h1>
        <CardCollection/>
        <h1 className="tracking-tighter mt-20 pg-5 text-center text-5xl lg:text-7xl">What exactly we do ?</h1>
        <GlitchSection/>
        <h1 className="tracking-tighter mt-20 pb-5 text-center text-5xl lg:text-7xl">How we do it ?</h1>
        <BentoGridDemo/>
      </>
  );
}
