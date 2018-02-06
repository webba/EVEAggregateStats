import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-title-h2',
	template: '<div class=" row justify-content-md-center border-bottom pb-3 mb-4">' +
	'<h2 clas="text-center" id="{{ name }}" >{{ name }}</h2></div>'
})
export class TitleH2Component implements OnInit {
	@Input() name: string;
	constructor() { }

	ngOnInit() {
	}

}