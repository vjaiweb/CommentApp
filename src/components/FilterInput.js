import React from 'react';

function FilterInput({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="filter-input">
      <label htmlFor="postIdFilter">Filter by Post ID:</label>
      <input
        type="text"
        id="postIdFilter"
        placeholder="Enter Post ID"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default FilterInput;
