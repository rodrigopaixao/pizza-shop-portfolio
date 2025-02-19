import { Button } from "@/components/ui/button.tsx";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({ perPage, pageIndex, totalCount, onPageChange }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">Total de {totalCount} items</span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">Page {pageIndex + 1} of {pages}</div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange(0)} disabled={pageIndex === 0}>
            <ChevronsLeft className="h-8 w-8" />
            <span className="sr-only">First Page</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange(pageIndex - 1)}
                  disabled={pageIndex === 0}>
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous Page</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange(pageIndex + 1)}
                  disabled={pages <= (pageIndex + 1)}>
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next Page</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => onPageChange(pages - 1)}
                  disabled={pages <= (pageIndex + 1)}>
            <ChevronsRight className="h-8 w-8" />
            <span className="sr-only">Last Page</span>
          </Button>
        </div>
      </div>
    </div>
  );
}