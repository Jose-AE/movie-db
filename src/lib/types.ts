export interface Movie {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  original_language: string
  genre_ids: number[]
  adult: boolean
  video: boolean
}

export interface MovieDetails extends Movie {
  belongs_to_collection: null | {
    id: number
    name: string
    poster_path: string | null
    backdrop_path: string | null
  }
  budget: number
  genres: Array<{
    id: number
    name: string
  }>
  homepage: string | null
  imdb_id: string | null
  production_companies: Array<{
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  revenue: number
  runtime: number | null
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string | null
}

export interface MovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
