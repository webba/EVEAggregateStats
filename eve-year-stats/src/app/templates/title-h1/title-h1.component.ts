import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ScrollTitle } from './scrolltitle.interface';

@Component({
	selector: 'app-title-h1',
	template: '<div class="row justify-content-md-center border-bottom pb-3 mb-4 mt-5">' +
	'<h1 clas="text-center" id="{{ name }}" > {{ name }} </h1></div>'
})
export class TitleH1Component implements OnInit, ScrollTitle {
	@Input() name: string;
	constructor(private elemRef: ElementRef) { }

	ngOnInit() {
	}

	public scrollTo(): void {
		this.elemRef.nativeElement.scrollIntoView();
		window.scrollBy(0, -56);
	}
}
