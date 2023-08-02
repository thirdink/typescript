import 'reflect-metadata';

class Plane {
	color: string = 'red';

	@markFunction('Hi There')
	fly(): void {
		console.log('vrrrrrr');
	}
}

function markFunction(secretInfo: string) {
	return function markFunction(target: Plane, key: string) {
		Reflect.defineMetadata('secret', secretInfo, target, key);
	};
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
