"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Movie } from "@/lib/types";

interface FavoritesContextType {
  favorites: Partial<Movie>[];
  addFavorite: (movie: Partial<Movie>) => void;
  removeFavorite: (movieId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Partial<Movie>[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addFavorite = (movie: Partial<Movie>) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
