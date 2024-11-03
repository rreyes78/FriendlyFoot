import React, { useState } from 'react';

const Pagination = () => {
    const totalPages = 100; // Total number of pages
    const [currentPage, setCurrentPage] = useState(6); // Start at page 1

    const [previousPage, setPreviousPage] = useState(1);
    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 5);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 5);
            setPreviousPage(currentPage => currentPage - 5)
        }
    };

    return (
        <div className="flex justify-center space-x-2 mt-4">
            <button
                onClick={handlePrev}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="self-center">
                 {previousPage} to {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                className="px-4 py-2 text-white bg-gray-300 rounded hover:bg-blue-600"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
