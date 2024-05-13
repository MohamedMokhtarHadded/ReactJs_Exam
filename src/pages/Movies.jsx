import Movie from "../sections/Movie";
import { getMovies } from "../services/ExamenService";
import { useEffect, useState } from "react";

function Movies() {

  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function fetchMovies() {
    const fetchedMovies = await getMovies();

    setMovies(fetchedMovies.data);
    setFilteredMovies(fetchedMovies.data);
  }

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  function searchMovies(){
    if(searchText == ""){
      setFilteredMovies(movies);
    }

    else{
      const result = filteredMovies.filter((m)=> {
        return m.title == searchText;
      });

      setFilteredMovies(result);
    }
  }

    

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      {/* add a search with a button in the top right */}

      <div className="row">
        <div className="col-auto ms-auto">
          <label>Search with text: </label>
          <input onChange={(e) => handleSearch(e)} type="text" />
          <button onClick={searchMovies} className="btn btn-primary ms-1">Search</button>
        </div>
      </div>

      <div className="row mt-4 d-flex justify-content-center">
              {filteredMovies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;