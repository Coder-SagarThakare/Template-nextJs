import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface props {
  currentPage: number;
  setCurrentPage: Function;
  totalPages: number;
}
export function PaginationDemo({
  currentPage,
  setCurrentPage,
  totalPages,
}: props) {
  const handleDecreaseCurrentPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleIncreaseCurrentPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={handleDecreaseCurrentPage} />
          </PaginationItem>
        )}
        {currentPage > 1 && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={handleDecreaseCurrentPage}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem className="cursor-pointer">
          <PaginationLink isActive>{currentPage}</PaginationLink>
        </PaginationItem>
        {totalPages > currentPage && (
          <PaginationItem className="cursor-pointer">
            <PaginationLink onClick={handleIncreaseCurrentPage}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {totalPages > currentPage && (
          <PaginationItem className="cursor-pointer">
            <PaginationNext onClick={handleIncreaseCurrentPage} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
