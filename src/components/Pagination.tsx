"use client";
import { useRouter } from "next/navigation";
import { scrollToElement } from "@/lib/client-utils";
import {
  UIPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/ui-pagination";

type Props = {
  pageCount: number;
  currentPage: number;
  pageParamKey?: string;
  offset?: number;
};

function generatePagination({
  pageCount,
  currentPage,
  offset = 2,
}: Props): number[] {
  let pagination = [];
  for (
    let page = currentPage - offset;
    page <= currentPage + offset && page <= pageCount;
    page++
  ) {
    if (page >= 1 && page <= pageCount) {
      pagination.push(page);
    }
  }
  return pagination;
}

function Pagination({
  pageCount,
  currentPage,
  pageParamKey = "page",
  offset = 2,
}: Props) {
  const router = useRouter();
  const handleNavigation = (selectedPage: number) => {
    let params = new URLSearchParams(window.location.search);
    params.set(pageParamKey, selectedPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
    scrollToElement("#exercises");
  };
  const paginationArr = generatePagination({
    pageCount,
    currentPage,
    offset,
  });
  let content = (
    <UIPagination>
      <PaginationContent>
        {!paginationArr.includes(1) && (
          <>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  handleNavigation(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {paginationArr.map((page) => {
          const isActive = page === currentPage;
          return (
            <PaginationItem key={`pagination-${page}`}>
              <PaginationLink
                isActive={isActive}
                onClick={() => {
                  if (!isActive) {
                    handleNavigation(page);
                  }
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {!paginationArr.includes(pageCount) && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  handleNavigation(pageCount);
                }}
              >
                {pageCount}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </UIPagination>
  );
  if (pageCount === 0 || currentPage < 1 || currentPage > pageCount)
    content = <></>;
  return (
    <div className="flex items-center justify-center gap-3">{content}</div>
  );
}

export default Pagination;
