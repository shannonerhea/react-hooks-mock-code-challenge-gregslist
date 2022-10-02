import React from "react";

function Search({ searchTerm, setSeacrhTerm }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSeacrhTerm(searchTerm);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSeacrhTerm(e.target.value)}
      />
      {/*<button type="submit">🔍</button>*/}
    </form>
  );
}

export default Search;
