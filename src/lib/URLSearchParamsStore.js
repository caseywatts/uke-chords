import { goto } from '$app/navigation';
import { page } from '$app/stores';

export function createQueryStore(prop) {
	var query = undefined;
	return {
		subscribe: (h) => {
			// any time $page gets updated, we'll update the queryStore
			return page.subscribe((p) => {
				query = Object.fromEntries(p.url.searchParams);
				h(query[prop]);
			});
		},
		set: (v) => {
			// any time the queryStore gets updated, we'll also update the url using goto()
			query[prop] = v;
			const urlSearchParams = new URLSearchParams(query);
			const g = `?${urlSearchParams.toString()}`;
			goto(g, { keepFocus: true, replaceState: true, noScroll: true });
		}
	};
}
