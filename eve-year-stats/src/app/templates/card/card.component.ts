import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	@Input() img: string;
	@Input() title: string;
	@Input() data: string;
	@Input() rdata: object;

	constructor() { }

	ngOnInit() {
		this.data = JSON.parse(this.data);
		// console.log('*********');
		// console.log(this.img);
		// console.log(this.data);
	}

	private getDataPoint(key: string): number {
		const droute = key.split('.');
		if (!this.rdata) {
			return 0;
		} else if (!this.rdata[droute[0]]) {
			return 0;
		} else if (!this.rdata[droute[0]][droute[1]]) {
			return 0;
		}
		return this.rdata[droute[0]][droute[1]];
	}

}
