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
}
export function PaginationDemo({ currentPage, setCurrentPage }: props) {
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
          <PaginationItem>
            <PaginationPrevious onClick={handleDecreaseCurrentPage} />
          </PaginationItem>
        )}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationLink onClick={handleDecreaseCurrentPage}>
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink onClick={handleIncreaseCurrentPage}>
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={handleIncreaseCurrentPage}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
