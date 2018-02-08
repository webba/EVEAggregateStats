import { Component, Input } from '@angular/core';
import { ScrollTitle } from '../templates/title-h1/scrolltitle.interface';

export class StatsNavbarPart {
	public Title: string;
	public Elem: string;
}

@Component({
	selector: 'app-stats-navbar',
	templateUrl: './stats-navbar.component.html',
	styleUrls: ['./stats-navbar.component.css']
})
export class StatsNavbarComponent {
	constructor() { }

	@Input() parts: StatsNavbarPart[];

	public scrollTo(elem: string): void {
		document.getElementById(elem).scrollIntoView();
		window.scrollBy(0, -60);
	}

	/**
	 * scrollToTop
	 */
	public scrollToTop() {
		window.scrollTo(0, 0);
	}
}
