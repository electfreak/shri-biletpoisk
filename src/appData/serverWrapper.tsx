import { CinemaData, MovieData } from "@/types/api";
import {AppDataProvider} from "./context";

export async function AppData({
  children,
}: {
  children: React.ReactNode;
}) {
  const movies = (await (
    await fetch(`${process.env.api_domain}/api/movies`)
  ).json()) as MovieData[];

  const cinemas = (await (
    await fetch(`${process.env.api_domain}/api/cinemas`)
  ).json()) as CinemaData[];

  return (
    <AppDataProvider movies={movies} cinemas={cinemas}>
      {children}
    </AppDataProvider>
  );
}
