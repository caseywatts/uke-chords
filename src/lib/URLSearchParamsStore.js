import { goto } from '$app/navigation';
import { page } from '$app/stores';

const booleanParam = {
	deserialize(string) {
		return string == 'true';
	},
	serialize(bool) {
		if (bool == true) {
			return 'true';
		} else {
			return 'false';
		}
	}
};

const arrayParam = {
	deserialize(string) {
		if (string) return string.split(',').map((v) => v.trim());
	},
	serialize(array) {
		return array.toString();
	}
};

const stringParam = {
	serialize(string) {
		return string.toString();
	},
	deserialize(string) {
		if (string) return string.toString();
	}
};

function serialize(paramType, data) {
	if (paramType == 'array') {
		return arrayParam.serialize(data);
	} else if (paramType == 'boolean') {
		return booleanParam.serialize(data);
	} else {
		return stringParam.serialize(data);
	}
}

function deserialize(paramType, data) {
	if (paramType == 'array') {
		return arrayParam.deserialize(data);
	} else if (paramType == 'boolean') {
		return booleanParam.deserialize(data);
	} else {
		return stringParam.deserialize(data);
	}
}

function queryStore(paramType, prop) {
	return {
		subscribe: (h) => {
			// any time $page gets updated, we'll update the queryStore
			return page.subscribe((p) => {
				h(deserialize(paramType, p.url.searchParams.get(prop)));
			});
		},
		set: (value) => {
			// any time the queryStore gets updated, we'll also update the url using goto()
			page.subscribe((p) => {
				p.url.searchParams.set(prop, serialize(paramType, value));
				goto(`?${p.url.searchParams.toString()}`, {
					keepFocus: true,
					replaceState: true,
					noScroll: true
				});
			});
		}
	};
}

export function createParamsArrayStore(prop) {
	return queryStore('array', prop);
}

export function createParamsBooleanStore(prop) {
	return queryStore('boolean', prop);
}

export function createParamsStringStore(prop) {
	return queryStore('string', prop);
}
