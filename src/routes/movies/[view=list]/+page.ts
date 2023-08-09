import * as api from "$lib/api"
import type { MovieList } from "$lib/types";
import { views } from "$lib/views";
import type { PageLoad } from "./$types";

export const load = (async ({params, url, fetch}) => {
  const view = views[params.view] 
  const page = url.searchParams.get('page') ?? '1'

  const data = await api.get(fetch, view.endpoint, {
    page
  }) as MovieList

  return {
    view: params.view,
    title: view.title,
    endpoint: view.endpoint,
    movies: data.results,
    infinite: true,
    next_page: data.page < data.total_pages ? data.page + 1 : null
  }
}) satisfies PageLoad
