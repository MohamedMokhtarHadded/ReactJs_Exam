import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/ExamenService";


function MovieDetails() {

  const params = useParams();
  const [movie, setMovie] = useState(null);

  async function getMovieDetails(){
    const response = await getMovieById(params.id);
    setMovie(response.data);
  }

  useEffect(() => {
    console.log('params', params.id)
    getMovieDetails();

  }, []);

  if (movie == null){
    return <h5 className="card-title">Movie not found</h5>
  }
  return (

    <div className="container">
      <div className="row">

        <div className="col-5">
          <img src="/assets/images/image.png" className="card-img-top img-fluid" alt="..." />
        </div>

        <div className="col-7">
          <div className="card-body">
            <h5 className="card-title">{movie?.title}</h5>
            <p className="card-text">Year: {movie?.year}</p>
            <p className="card-text">Genre: {movie?.genre}</p>
            <p className="card-text">Description: {movie?.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    </div>

  );
}

export default MovieDetails;