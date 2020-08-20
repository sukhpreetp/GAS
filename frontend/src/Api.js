//Example: getApi('/users').then(data => console.log(data));
export function getApi(url) {
	return fetch(url).then(data=>data.json());
}

//Example: postApi('/users', {username: 'Test User', email:'123@test.com'}).then(data => console.log(data));
export function postApi(url, body) {
	return fetch(url, {
		"method":  "POST",
		"headers": {
			"content-type": "application/json",
			"accept": "application/json"
		},
		body: JSON.stringify(body)
	}).then(data=>data.json());
}

//Example: putApi('/users/-MF9vsvHVO7Mwa_5G9SD', {username: 'New Test User', email:'123@test.com'}).then(data => console.log(data));
export function putApi(url, body) {
	return fetch(url, {
		"method":  "PUT",
		"headers": {
			"content-type": "application/json",
			"accept": "application/json"
		},
		body: JSON.stringify(body)
	}).then(data=>data.json());
}

//Example: deleteApi('/users/-MF9vsvHVO7Mwa_5G9SD').then(data => console.log(data));
export function deleteApi(url) {
	return fetch(url, {
		"method":  "delete",
		"headers": {
			"content-type": "application/json",
			"accept": "application/json"
		}
	}).then(data=>data.json());
}
