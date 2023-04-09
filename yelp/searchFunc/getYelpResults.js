import Yelp from "yelp-fusion";

const getYelpResults = async (searchTerm) => {
    const client = Yelp.client("YOUR_API_KEY");
  
    const searchRequest = {
      term: searchTerm,
      location: "San Francisco, CA",
    };
  
    try {
      const response = await client.search(searchRequest);
      const businesses = response.jsonBody.businesses;
      return businesses;
    } catch (error) {
      console.error(error);
    }
  };

  function AutoFillResults({ results }) {
    return (
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    );
  }
  
  export default AutoFillResults;
  
  