import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		return this.data.length;
	}

	// compare two numbers
	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	// swap two numbers
	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = leftHand;
	}
}
