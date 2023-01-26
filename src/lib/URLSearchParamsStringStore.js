import { goto } from '$app/navigation';
import { page } from '$app/stores';

function serialize(string) {
	return string;
}

function deserialize(string) {
	return string;
}

export default function (prop) {
	return {
		subscribe: (h) => {
			// any time $page gets updated, we'll update the queryStore
			return page.subscribe((p) => {
				h(deserialize(p.url.searchParams.get(prop)));
			});
		},
		set: (value) => {
			// any time the queryStore gets updated, we'll also update the url using goto()
			page.subscribe((p) => {
				p.url.searchParams.set(prop, serialize(value));
				goto(`?${p.url.searchParams.toString()}`, {
					keepFocus: true,
					replaceState: true,
					noScroll: true
				});
			});
		}
	};
}
