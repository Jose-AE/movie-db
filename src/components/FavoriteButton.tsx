"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "./FavoritesProvider";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  movieId: number;
  title: string;
  posterPath: string | null;
  small?: boolean;
}

export function FavoriteButton({ movieId, title, posterPath, small = false }: FavoriteButtonProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((movie) => movie.id === movieId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movieId);
    } else {
      addFavorite({
        id: movieId,
        title,
        poster_path: posterPath,
      });
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={cn(
        "flex items-center justify-center rounded-full cursor-pointer",
        small ? "p-1" : "p-2",
        isFavorite ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"
      )}
    >
      <Heart className={cn(small ? "w-4 h-4" : "w-5 h-5", isFavorite ? "fill-current" : "")} />
    </button>
  );
}
