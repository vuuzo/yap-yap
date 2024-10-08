"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
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

  const createURL = (page: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    return `${pathname}?${params.toString()}`;
  };
  return (
    <Pagination className={cn("", className)}>
      <PaginationContent>
        {Array.from({ length: pages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={i + 1 === currentPage}
              className='group'
              href={createURL(i + 1)}
            >
              <div
                className={cn(
                  "w-1 h-1 rounded-full bg-black/10 group-hover:bg-black/20 dark:bg-white/10 dark:group-hover:bg-white/20",
                  i + 1 === currentPage
                    ? "bg-black group-hover:bg-black/100 dark:bg-white dark:group-hover:bg-white/100"
                    : ""
                )}
              />
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
}
