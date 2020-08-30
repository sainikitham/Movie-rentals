import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    if (this.state.movies.length === 0) {
      return <h2>there are no movies in the database!</h2>;
    }
    return (
      <React.Fragment>
        <h3>Showing {this.state.movies.length} movies from the database!</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.genre.name}</td>
                <td>
                  <button
                    onClick={() => this.onDelete(movie._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  onDelete = (id) => {
    let newMovies = this.state.movies.filter((movie) => {
      return movie._id !== id;
    });
    this.setState({ movies: newMovies });
  };
}

export default Movies;
