"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/client-utils";

function Navbar() {
  return (
    <header className="container flex items-center justify-between h-16">
      <Logo />

      <div className="flex items-center justify-between gap-x-3">
        <Button
          onClick={() => {
            scrollToElement("#exercises");
          }}
        >
          Exercise
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
