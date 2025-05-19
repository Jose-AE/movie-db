import { MovieGrid } from "@/components/MovieGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getMovies } from "@/lib/api";

export default async function Home() {
  const [popularMovies, topRatedMovies, nowPlayingMovies] = await Promise.all([
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("now_playing"),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Jose Luis movie database!</h1>

      <section className="mb-12">
        <SectionHeading title="Popular Movies" href="/popular" />
        <MovieGrid movies={popularMovies.results.slice(0, 4)} />
      </section>

      <section className="mb-12">
        <SectionHeading title="Top Rated Movies" href="/top-rated" />
        <MovieGrid movies={topRatedMovies.results.slice(0, 4)} />
      </section>

      <section className="mb-12">
        <SectionHeading title="Now Playing" href="/now-playing" />
        <MovieGrid movies={nowPlayingMovies.results.slice(0, 4)} />
      </section>
    </main>
  );
}
