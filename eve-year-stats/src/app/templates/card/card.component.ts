import { Component, OnInit, Input } from '@angular/core';
import { get as _get } from 'lodash';

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
	}

	private getDataPoint(key: string): number {
		return _get(this.rdata, key, 0);
	}

}
