import React from 'react';

interface PaginationProps {
  pageInfo: { totalResults: number; resultsPerPage: number };
}

const Pagination: React.FC<PaginationProps> = ({ pageInfo }) => {
  const totalPages = Math.ceil(pageInfo.totalResults / pageInfo.resultsPerPage);
  const currentPage = 1; 

  const renderPages = () => {
    const pages = [];
    const pageNumbersToShow = 5;

    if (totalPages <= pageNumbersToShow) {  
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageNumber(i));
      }
    } else {
      const middlePageNumber = Math.ceil(pageNumbersToShow / 2);
      let firstPageNumber = Math.max(currentPage - middlePageNumber + 1, 1);
      const lastPageNumber = Math.min(firstPageNumber + pageNumbersToShow - 1, totalPages);

      if (lastPageNumber === totalPages) {
        firstPageNumber = Math.max(lastPageNumber - pageNumbersToShow + 1, 1);
      } else if (firstPageNumber > 1) {
        pages.push(renderEllipsis());
      }

      for (let i = firstPageNumber; i <= lastPageNumber; i++) {
        pages.push(renderPageNumber(i));
      }

      if (lastPageNumber < totalPages) {
        pages.push(renderEllipsis());
      }
    }

    return pages;
  };

  const renderPageNumber = (pageNumber: number) => {
    return (
      <div
        key={pageNumber}
        className={`px-4 py-2 mx-1 rounded ${
          pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
        }`}
      >
        {pageNumber}
      </div>
    );
  };

  const renderEllipsis = () => {
    return (
      <div key="ellipsis" className="px-4 py-2 mx-1 text-gray-700">
        ...
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button className="px-4 py-2 mx-1 rounded bg-blue-500 text-white">Prev</button>
      {renderPages()}
      <button className="px-4 py-2 mx-1 rounded bg-blue-500 text-white">Next</button>
    </div>
  );
};

export default Pagination;
