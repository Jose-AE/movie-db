import { MovieGrid } from "@/components/MovieGrid";
import { getMovies } from "@/lib/api";

export default async function PopularMoviesPage() {
  const movies = await getMovies("popular");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
      <MovieGrid movies={movies.results} />
    </main>
  );
}
