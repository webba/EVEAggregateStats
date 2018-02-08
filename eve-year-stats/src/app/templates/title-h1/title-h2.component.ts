import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ScrollTitle } from './scrolltitle.interface';

@Component({
	selector: 'app-title-h2',
	template: '<div class=" row justify-content-md-center border-bottom pb-3 mb-4">' +
	'<h2 clas="text-center" id="{{ name }}" >{{ name }}</h2></div>'
})
export class TitleH2Component implements OnInit, ScrollTitle {
	@Input() name: string;
	constructor(private elemRef: ElementRef) { }

	ngOnInit() {
	}

	public scrollTo(): void {
		this.elemRef.nativeElement.scrollIntoView();
		window.scrollBy(0, -56);
	}
}
