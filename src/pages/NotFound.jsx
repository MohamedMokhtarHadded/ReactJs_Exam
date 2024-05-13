import { useEffect } from "react";

function NotFound() {

    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/movies");
        }, 3000);
    }, []);

  return (

    // display message 3 seconds before redirecting to the movies page
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>404 - Not Found</h1>
          <p>Redirecting to the movies page...</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;