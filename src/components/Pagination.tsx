"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  pageCount: number;
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  pageParamKey?: string;
};

function Pagination({
  pageCount,
  currentPage,
  hasPrevious,
  hasNext,
  pageParamKey = "page",
}: Props) {
  const router = useRouter();
  const handleNavigation = (selectedPage: number) => {
    let params = new URLSearchParams(window.location.search);
    params.set(pageParamKey, selectedPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };
  let content = (
    <>
      <Button
        onClick={() => handleNavigation(currentPage - 1)}
        disabled={!hasPrevious}
      >
        &lt; Previous
      </Button>
      {currentPage} / {pageCount}
      <Button
        onClick={() => handleNavigation(currentPage + 1)}
        disabled={!hasNext}
      >
        Next &gt;
      </Button>
    </>
  );
  if (pageCount === 0 || currentPage < 1 || currentPage > pageCount)
    content = <></>;
  return (
    <div className="flex items-center justify-center gap-3">{content}</div>
  );
}

export default Pagination;
