import { Component, Input } from '@angular/core';
import { ScrollTitle } from '../templates/title-h1/scrolltitle.interface';

export class StatsNavbarPart {
	public Title: string;
	public Elem: ScrollTitle;
}

@Component({
	selector: 'app-stats-navbar',
	templateUrl: './stats-navbar.component.html',
	styleUrls: ['./stats-navbar.component.css']
})
export class StatsNavbarComponent {
	constructor() { }

	@Input() parts: StatsNavbarPart[];

	public scrollTo(elem: ScrollTitle): void {
		console.log(elem);
		elem.scrollTo();
	}
}
