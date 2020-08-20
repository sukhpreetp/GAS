export function getApi(url) {
	return fetch(url).then(data=>data.json());
}
