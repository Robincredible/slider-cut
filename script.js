function setCompare(value){

	const exampleSet = new Set([1,1,1,1,1,2,2,2,2,]);

	console.log(exampleSet.size);

	let bool = exampleSet.has(value);
	console.log(bool);

	if ( bool == true ){
		console.log('Y E S');
	} else{
		console.error("Value isn't here");
	}

	exampleSet.clear(); //resets to 0

}

setCompare(2);

const apiURL = 'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'; //'https://api.publicapis.org/entries?category=animals&https=true';

function getTop100Campers(){
	fetch(apiURL, {
		method: 'get'
	})
	.then( (r) => {

		if (r.ok){
			console.log("Success! Response status code is " + r.status);
		} else{
			console.error("Can't access url resource with error code " + r.status);
		}

		console.log(r); 
		return r.json();
	})
	.then( (json) => {
		console.log( 'this? ' + json[0] );
	})
	.catch((error) =>{
		console.error('F A I L E D');
	});
}

const apiURL2 = 'http://localhost:1337/Homepages/1';

async function getTop200Campers(){
	const response = await fetch(apiURL2, {
		method: 'get',
		email: 'batbord94@gmail.com'
	});
	const json = await response.json();

	if (!response.ok){
		console.error('Failed with status code of ' + response.status);
	} else{
		console.log('200! ' + json[0]);
	}

}

function resolveAfter3Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved!');
		}, 3000);
	});
}

getTop100Campers();
getTop200Campers();

resolveAfter3Seconds().then((data) => {
	console.log(data);
});

async function getAsyncData() {
	const result = await resolveAfter3Seconds();
	console.log(result);
}

getAsyncData();

import { Animal, Cat } from "./animal.js";

let cat = new Cat('Cat', 4);

cat.legs = 3;
cat.makeNoise();

console.log(Animal.return10());

function addressMaker(address){

	const {city, state} = address;

	const newAdress = {city, state, country: 'United States'};

	console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`);

}

addressMaker({city: 'Austin', state:'Texas'});

let incomes = [40, 50, 60];

for (let income of incomes){
	income += 5000;
}

console.log(incomes);

function arrayPusher(){

	let example1 = [1,2,3,4,5,6];
	let example2 = [...example1];

	example2.push(true);

	console.log(example2);

}

arrayPusher();

//ES6 and Beyond FINISHED