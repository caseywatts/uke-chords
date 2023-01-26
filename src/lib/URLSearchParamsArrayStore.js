import { goto } from '$app/navigation';
import { page } from '$app/stores';

function stringifyArray(array) {
	return array.toString();
}

function arrayifyString(string) {
	return string.split(',').map((v) => v.trim());
}

export function createParamsArrayStore(prop) {
	return {
		subscribe: (h) => {
			// any time $page gets updated, we'll update the queryStore
			return page.subscribe((p) => {
				h(arrayifyString(p.url.searchParams.get(prop)));
			});
		},
		set: (value) => {
			// any time the queryStore gets updated, we'll also update the url using goto()
			page.subscribe((p) => {
				p.url.searchParams.set(prop, stringifyArray(value));
				goto(`?${p.url.searchParams.toString()}`, {
					keepFocus: true,
					replaceState: true,
					noScroll: true
				});
			});
		}
	};
}
