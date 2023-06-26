import { MovieData } from "@/types/api";
import Page from "./clientPage";

const movies = (await (
  await fetch(`${process.env.api_domain}/api/movies`)
).json()) as MovieData[];

export default function Cart() {
  return <Page movies={movies} />;
}
