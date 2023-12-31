@classDecorator
class Boat {
	@testDecorator
	color: string = 'red';

	@testDecorator
	get formatedColor(): string {
		return `This boats color is ${this.color}`;
	}

	@logError('oops boat was sunk in the ocean')
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator generateWake: boolean
	): void {
		if (speed === 'fast') {
			console.log('swish');
		} else {
			throw new Error();
		}
	}
}

function classDecorator(constructor: typeof Boat) {
	console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log('key: ', key);
	console.log('index: ', index);
}

function testDecorator(target: any, key: string) {
	console.log('target: ', target);
	console.log('key: ', key);
}

function logError(errorMessage: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value;
		desc.value = function () {
			try {
				method();
			} catch (e) {
				console.log(errorMessage);
			}
		};
	};
}
