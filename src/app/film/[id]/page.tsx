import MoviePage from "@/app/components/MovieScreen/MovieScreen";
import { MovieData, ReviewData } from "@/types/api";

export default async function Film({ params }: { params: { id: string } }) {
  const movie = (await (
    await fetch(`${process.env.api_domain}/api/movie?movieId=${params.id}`)
  ).json()) as MovieData;

  const reviews = (await (
    await fetch(`${process.env.api_domain}/api/reviews?movieId=${params.id}`)
  ).json()) as ReviewData[];

  return <MoviePage movie={movie} reviews={reviews} />;
}
