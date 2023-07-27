function Pagination({
  totalAmount,
  postsPerPage,
  paginate,
  currentPage,
  nextPage,
  previousPage,
}) {
  const numberOfPages = Array.from({
    length: totalAmount.length / postsPerPage,
  });

  return (
    <div className="pagination-container">
      <button onClick={previousPage}>&larr;</button>
      {numberOfPages.map((_, index) => (
        <button
          className={`${currentPage === index + 1 ? "selected" : ""}`}
          onClick={() => paginate(index + 1)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage}>&rarr;</button>
    </div>
  );
}

export default Pagination;
