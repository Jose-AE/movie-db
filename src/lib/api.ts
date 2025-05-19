import type { MovieDetails, MovieResponse } from "./types";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
  console.warn("TMDB_API_KEY is not defined in environment variables");
}

async function fetchFromTMDB(endpoint: string, params: Record<string, string> = {}) {
  const url = `${BASE_URL}${endpoint}`;

  const queryParams = { api_key: API_KEY || "", ...params };

  try {
    const response = await axios.get(url, { params: queryParams });
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching data from TMDB:", error);
    throw new Error("Failed to fetch data from TMDB");
  }
}

export async function getMovies(category: string): Promise<MovieResponse> {
  return fetchFromTMDB(`/movie/${category}`);
}

export async function getMovieDetails(id: string): Promise<MovieDetails> {
  return fetchFromTMDB(`/movie/${id}`);
}

export async function getSimilarMovies(id: string): Promise<MovieResponse> {
  return fetchFromTMDB(`/movie/${id}/similar`);
}
