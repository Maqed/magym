"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/client-utils";

function Navbar() {
  return (
    <header className="container flex items-center justify-between h-16 bg-base-100">
      <Logo className="text-2xl" />

      <div>
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
