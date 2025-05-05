"use strict";

class Exercise3 {
  #movies = new Map();
  //key is the genre: string, value is array of movies
  // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }
  add_genre(genre) {
    // add genre if genre does not exist
    if (!this.#movies.get(genre)) {
      this.#movies.set(genre, []);
      return true;
    }
    return false;
  }
  add_movie_in_genre(genre, new_movie) {
    if (!this.#movies.get(genre)) {
      this.#movies.get(genre).push(new_movie);
      return true;
    }
    return false;
  }
  update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
    // update a movie within a certain genre
    // return true if the movie's title is updated successfully, false otherwise
    const movie = this.#movies.get(genre)?.find((mv) => mv.id == movie_id);
    if (movie) {
      movie.title = new_title;
      return true;
    }
    return false;
  }
  delete_movie_by_genre_and_movie_id(genre, movie_id) {
    const index = this.#movies.get(genre)?.findIndex((mv) => mv.id == movie_id);
    if (index !== -1) {
      this.#movies.get(genre).splice(index, 1);
      return true;
    }
    return false;
  }
  get_movie_title_by_id(genre, movie_id) {
    // return the movie title
    const movie = this.#movies.get(genre)?.find((mv) => mv.id == movie_id);
    return movie?.title;
  }
}
