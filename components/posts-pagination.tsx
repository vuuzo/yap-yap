"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { cn } from "@/lib/utils";

export function PostsPagination({
  pages,
  className,
}: {
  className?: string;
  pages: number;
  currentPage: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination className={cn("", className)}>
      <PaginationContent>
        {prevPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious href={createURL(prevPage)} />
          </PaginationItem>
        )}
        {Array.from({ length: pages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i + 1 === currentPage}
              className='group'
              href={createURL(i + 1)}
            >
              <div
                className={cn(
                  "w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/20",
                  i + 1 === currentPage
                    ? "bg-white group-hover:bg-white/100"
                    : ""
                )}
              />
            </PaginationLink>
          </PaginationItem>
        ))}
        {nextPage <= pages && (
          <PaginationItem>
            <PaginationNext href={createURL(nextPage)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
