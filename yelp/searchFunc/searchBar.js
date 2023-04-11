import React, { useState } from "react";
import Yelp from "yelp-fusion";
import getYelpResults from '../yelp'


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [autoFillResults, setAutoFillResults] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 2) {
      const results = await getYelpResults(value);
      setAutoFillResults(results);
    } else {
      setAutoFillResults([]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something with searchTerm

    
    const results = await getYelpResults(searchTerm);
    
    setSelectedPlace(results[0]) // assuming position 0 is selected
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {autoFillResults.length > 0 && <AutoFillResults results={autoFillResults} />}
      {selectedPlace && (
        <div>
          <h2>{selectedPlace.name}</h2>
          <p>{selectedPlace.location.address1}</p>
          <p>{selectedPlace.location.city}, {selectedPlace.location.state} {selectedPlace.location.zip_code}</p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

