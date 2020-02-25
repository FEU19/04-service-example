import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	value: number = 0;

	constructor(public counterService: CounterService) {
		console.log('constructor')
	}

	ngOnInit(): void {
		console.log('ngOnInit');
		this.getNextValue();
	}

	getNextValue(): void {
		this.value = this.counterService.getValue();
	}
}






//
