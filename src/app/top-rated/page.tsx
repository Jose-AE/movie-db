import { MovieGrid } from "@/components/MovieGrid";
import { getMovies } from "@/lib/api";

export default async function TopRatedMoviesPage() {
  const movies = await getMovies("top_rated");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Top Rated Movies</h1>
      <MovieGrid movies={movies.results} />
    </main>
  );
}
