import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	currentValue: number = 1;
	increment: number = 1;

	constructor() { }

	getValue(): number {
		console.log('counterService getValue');
		this.currentValue += this.increment;
		return this.currentValue;
	}
}
