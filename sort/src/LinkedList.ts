import { Sorter } from './Sorter';
class Node {
	value: number;
	next: Node | null;
	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

export class LinkedList extends Sorter {
	head: Node | null = null;

	add(value: number): void {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}

		return length;
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error('Index out of bounds');
		}

		let counter = 0;
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		throw new Error('Index out of bounds');
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		if (!this.head) {
			throw new Error('List is empty');
		}

		return this.at(leftIndex).value > this.at(rightIndex).value;
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftNode = this.at(leftIndex);
		const rightNode = this.at(rightIndex);

		const leftHand = leftNode.value;
		leftNode.value = rightNode.value;
		rightNode.value = leftHand;
	}

	print(): void {
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.value);
			node = node.next;
		}
	}
}
