export default class SwapiService {

	_apiBase = 'https://swapi.dev/api';
	// _imageBase = 'https://starwars-visualguide.com/assets/img';

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${res.status}`)
		}
		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource(`/people/`);
		return res.results
			.map(this._transformPerson)
			.slice(0, 10);
	};

	getPerson = async (id) => {
		const person = await this.getResource(`/people/${id}/`);
		return this._transformPerson(person);
	};

	getPlanet = async (item) => {
		const id = this._extractItemId(item);
		const planet = await this.getResource(`/planets/${id}/`);
		return this._transformPlanet(planet);
	};

	getPlanetsFromUserArr = async (data) => {
		return Promise.all(data.map((element) => this.getPlanet(element.homeworld)));
	}


	getPeopleWithTheirPlanet = async () => {
		const allPeople = await this.getAllPeople();
		return Promise.all(allPeople.map(async (element) => {
			// const planet = await this.getPlanet(element.homeworld); //{planetId,planetname} = await this.getPlanet(element.homeworld)
			const { id: planet_id, name: planet_name } = await this.getPlanet(element.homeworld);
			return Object.assign({}, element, { planet_id, planet_name });
		}));
	}


	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	};

	_extractItemId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.match(idRegExp)[1];
	};


	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			birthYear: person.birth_year,
			gender: person.gender,
			homeworld: person.homeworld
		}
	}

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name
		}
	}
}