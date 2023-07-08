let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

class Car {}

let car: Car = new Car();

// object literal

let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

const logNumber: (i: number) => void = (i) => {
	console.log(i);
};
let foundWord: boolean;

let words = ['red', 'green', 'blue'];

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i];
	}
}

const add = (a: number, b: number): number => {
	return a + b;
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(forecast);
