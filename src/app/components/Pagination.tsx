import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const renderPagination = () => {
        const pageNumbers: (number | string)[] = [];
        const totalPagesToShow = 5;

        if (totalPages <= totalPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return (
            <div className="flex flex-wrap justify-center mt-4 space-x-1 sm:space-x-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 sm:px-2 sm:py-2 text-sm sm:text-base bg-[#78B3CE] text-[#FBF8EF] rounded-md disabled:opacity-0"
                >
                    Prev
                </button>

                {totalPages !== 1 && pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        disabled={typeof page !== 'number'}
                        className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base ${currentPage === page
                            ? 'bg-[#78B3CE] text-[#FBF8EF]'
                            : 'bg-gray-200 text-gray-700'} rounded-md`}
                    >
                        {typeof page === 'number' ? page : '...'}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 sm:px-2 sm:py-2 text-sm sm:text-base bg-[#78B3CE] text-[#FBF8EF] rounded-md disabled:opacity-0"
                >
                    Next
                </button>
            </div>
        );
    };

    return renderPagination();
};

export default Pagination;
