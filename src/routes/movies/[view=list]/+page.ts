import * as api from "$lib/api"
import type { MovieList } from "$lib/types";
import { views } from "$lib/views";
import type {View } from "$lib/views"
import type { Load } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: Load & {params: {view: string}} = (async ({params, url, fetch}) => {
  const view = views[params.view] as View

  const data = await api.get(fetch, view.endpoint) as MovieList

  return {
    title: view.title,
    endpoint: view.endpoint,
    movies: data.results
  }
}) satisfies PageLoad
