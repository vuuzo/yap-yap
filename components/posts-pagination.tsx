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
              href={createURL(i + 1)}
            >
              {i + 1}
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
