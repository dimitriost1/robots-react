const SearchBox = ({ setSearchInput, searchInput }) => {
  function searchInputChange(e) {
    setSearchInput((prev) => e.target.value);
  }

  return (
    <>
      <div className="d-flex justify-content-center mb-5 ">
        <div className="bg-light p-2 border border-primary border-3 rounded-3">
          <i className="bi bi-search me-2 text-secondary" />
          <input
            onChange={searchInputChange}
            type="text"
            className="border-0  text-body"
            placeholder="search by name"
            value={searchInput}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
