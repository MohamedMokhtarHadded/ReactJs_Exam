import { Link } from "react-router-dom";
import { updateRating } from "../services/ExamenService";
import { useEffect, useState } from "react";


function Movie({
  movie
}) {

  const [rating, setRating] = useState(0);
  
  function handleRating(event) {
    setRating(event.target.value);
  }

  async function rate(){
    if (rating < 0 || rating > 5) {
      alert("rating should be between 1 and 5");
    }
    else{
      movie.rating.push(Number(rating));
      const response = await updateRating(movie.id, movie);
      movie = response.data;
      // alert("Rating updated");
    }
  }


  return (

    <div className="card">
      <img src="/assets/images/image.png" className="card-img-top img-fluid" alt="..." />
      <div className="card-body text-center">
        <Link to={`/movieDetails/${movie.id}`} className="card-title">{movie.title}</Link>
        <p className="card-text">Year: {movie.year}</p>
        <p className="card-text">Genre: {movie.genre}</p>
        <p className="card-text">Description: {movie.description}</p>


        <h2>Movie rating</h2>

        <div className="row">
          <div className="col-auto ms-auto">
            <label>Rate this movie: </label>
            <input onChange={(e) => handleRating(e)} type="number" />
            <button onClick={() => rate()} className="btn btn-primary ms-1">Rate</button>
          </div>
        </div>

        {movie.rating.length == 0 ? <p className="card-text">No rating found</p> : <p className="card-text"> Rating : {movie.rating.reduce((a,b)=> a+b)/movie.rating.length} </p>}

      </div>


    </div>
  );
}

export default Movie;