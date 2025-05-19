import Image from "next/image";
import { MovieGrid } from "@/components/MovieGrid";
import { FavoriteButton } from "@/components/FavoriteButton";
import { getMovieDetails, getSimilarMovies } from "@/lib/api";
import { formatDate, formatRuntime } from "@/lib/utils";

export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [movie, similarMovies] = await Promise.all([getMovieDetails(id), getSimilarMovies(id)]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-1/3">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{movie.title}</h1>
            <FavoriteButton movieId={movie.id} title={movie.title} posterPath={movie.poster_path} />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
                {genre.name}
              </span>
            ))}
          </div>

          <div className="text-gray-600 dark:text-gray-400 mb-6">
            <p>
              {formatDate(movie.release_date)} • {formatRuntime(movie.runtime)}
            </p>
            <p className="mt-1">Rating: {movie.vote_average.toFixed(1)}/10</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">{movie.overview}</p>
          </div>

          {movie.tagline && (
            <div className="mb-6 italic text-gray-600 dark:text-gray-400">&quot;{movie.tagline}&quot;</div>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-2">Details</h2>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>
                <span className="font-medium">Status:</span> {movie.status}
              </li>
              <li>
                <span className="font-medium">Original Language:</span> {movie.original_language.toUpperCase()}
              </li>
              <li>
                <span className="font-medium">Budget:</span> ${movie.budget.toLocaleString()}
              </li>
              <li>
                <span className="font-medium">Revenue:</span> ${movie.revenue.toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Similar Movies</h2>
        <MovieGrid movies={similarMovies.results.slice(0, 4)} />
      </section>
    </main>
  );
}
