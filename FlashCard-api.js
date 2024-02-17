const url = 'https://sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e570b452f6msh3e1cfa70d830de8p1e9cdejsn44ffb299a575',
		'X-RapidAPI-Host': 'sameerbhatia-proprofs-flashcards-maker.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}