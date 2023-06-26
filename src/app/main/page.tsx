import ClientPage from "./clientPage";

import { MovieData, CinemaData } from "@/types/api";

export default async function Page() {
  const movies = (await (
    await fetch(`${process.env.api_domain}/api/movies`)
  ).json()) as MovieData[];

  const cinemas = (await (
    await fetch(`${process.env.api_domain}/api/cinemas`)
  ).json()) as CinemaData[];

  return (
    <ClientPage cinemas={cinemas} movies={movies} />
  );
}
