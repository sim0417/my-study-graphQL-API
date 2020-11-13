import { getMovies, getMovie, getSuggestions } from "./mydb";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
