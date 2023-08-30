"use client";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/client-utils";

function Navbar() {
  return (
    <header className="container flex items-center justify-between h-16 bg-base-100">
      <Logo className="text-2xl" />

      <div className="flex items-center justify-between gap-x-3">
        <ModeToggle />
        <Button
          onClick={() => {
            scrollToElement("#exercises");
          }}
          className="btn-primary"
        >
          Exercise
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
