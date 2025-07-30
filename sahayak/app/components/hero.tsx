import { Button } from "./button";
// import TestimonialsAvatars from "./testimonials-avatars";

function Hero({ }: { config?: string }) {
  return (
    <div id="hero">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-8 py-12 pt-4 lg:px-12 lg:py-24">
        <div className="mx-auto mb-8 max-w-2xl py-8 sm:py-8 lg:py-8">
          <div className="hidden sm:flex sm:justify-center"></div>
          <div className="mt-2 text-center">
            <h1 className="text-4xl font-black tracking-tight text-[#fd8f4b] sm:text-6xl">
              Sustainable Farming 
              <br /> Solutions for a Greener Tomorrow.
            </h1>
            <p className="mt-6 text-base font-light leading-8 text-secondary-foreground text-slate-500 sm:text-lg">
              A cost-effective, energy-efficient solution for growing microgreens in urban environments.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
              <Button
                color="green"
                href={"#before-after"} // Change here
                className="h-12 w-64 rounded-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <HeroFooter />
      </div>
    </div>
  );
}

const HeroFooter = () => {
  return (
    <div className="-gap-1 mt-auto flex items-center justify-center"></div>
  );
};

export default Hero;
