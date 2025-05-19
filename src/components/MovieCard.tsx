import Image from "next/image";
import Link from "next/link";
import { FavoriteButton } from "./FavoriteButton";
import type { Movie } from "@/lib/types";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <Link href={`/movie/${movie.id}`} className="block relative aspect-[2/3] w-full">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.svg?height=450&width=300"
          }
          alt={movie.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <Link href={`/movie/${movie.id}`} className="block">
            <h3 className="font-bold text-lg mb-1 hover:text-gray-600 dark:hover:text-gray-300 line-clamp-1">
              {movie.title}
            </h3>
          </Link>
          <FavoriteButton movieId={movie.id} title={movie.title} posterPath={movie.poster_path} small />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
        </p>
        <div className="flex items-center">
          <div className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded">
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
}
