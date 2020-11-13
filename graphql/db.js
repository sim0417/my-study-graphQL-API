let movie = [
  {
    id: 1,
    name: "Movie1",
    score: 10,
  },
  {
    id: 2,
    name: "Movie2",
    score: 20,
  },
  {
    id: 3,
    name: "Movie3",
    score: 30,
  },
  {
    id: 4,
    name: "Movie4",
    score: 40,
  },
];

export const getMovies = () => movie;

export const getById = (id) => {
  return movie.find((item) => item.id === id);
};

export const deleteMovie = (id) => {
  const cleanMovie = movie.filter((item) => item.id !== id);

  if (movie.length > cleanMovie.length) {
    movie = cleanMovie;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movie.length + 1,
    name,
    score,
  };

  movie.push(newMovie);
  return newMovie;
};
