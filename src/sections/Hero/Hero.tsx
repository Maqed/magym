"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/client-utils";
import Image from "next/image";

function Hero() {
  return (
    <section className="container flex items-center justify-between gap-5 height-screen-without-navbar max-md:flex-col">
      <div className="flex flex-col justify-center gap-5 height-screen-without-navbar md:w-3/4">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Welcome to{" "}
          <Logo className="inline text-3xl md:text-5xl lg:text-6xl" />
        </h1>
        <p className="text-lg md:text-xl ">
          Your ultimate online destination for fitness goals. Whether you want
          to lose weight, gain muscle, or improve your health, we have the
          perfect exercises for you.
        </p>
        <div>
          <Button
            className="uppercase"
            onClick={() => {
              scrollToElement("#exercises");
            }}
            size="lg"
          >
            Exercise Now
          </Button>
        </div>
      </div>
      <div className="max-md:hidden md:w-1/3 lg:w-1/4">
        <Image
          width={800}
          height={800}
          className="w-full h-auto"
          src="/hero-img.png"
          alt="Gym"
        />
      </div>
    </section>
  );
}

export default Hero;
