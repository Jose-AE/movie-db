"use client";

import { useEffect, useState } from "react";
import { MovieGrid } from "@/components/MovieGrid";
import { useFavorites } from "@/components/FavoritesProvider";
import type { Movie } from "@/lib/types";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>

      {favorites.length > 0 ? (
        <MovieGrid movies={favorites as Movie[]} />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 dark:text-gray-400">You haven&apos;t added any favorites yet.</p>
        </div>
      )}
    </main>
  );
}
