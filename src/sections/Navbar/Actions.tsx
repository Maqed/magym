"use client";
import { Button } from "@/component/";
import { scrollToElement } from "@/lib/utils";
function Actions() {
  return (
    <div className="navbar-end">
      <Button
        onClick={() => {
          scrollToElement("#exercises");
        }}
        className="btn-primary"
      >
        Exercise
      </Button>
    </div>
  );
}

export default Actions;
