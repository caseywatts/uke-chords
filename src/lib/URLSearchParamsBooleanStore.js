import { goto } from '$app/navigation';
import { page } from '$app/stores';

export function createParamsBooleanStore(prop) {
	return {
		subscribe: (h) => {
			// any time $page gets updated, we'll update the queryStore
			return page.subscribe((p) => {
				h(p.url.searchParams.get(prop) == 'true');
			});
		},
		set: (value) => {
			// any time the queryStore gets updated, we'll also update the url using goto()
			page.subscribe((p) => {
				p.url.searchParams.set(prop, value);
				goto(`?${p.url.searchParams.toString()}`, {
					keepFocus: true,
					replaceState: true,
					noScroll: true
				});
			});
		}
	};
}
