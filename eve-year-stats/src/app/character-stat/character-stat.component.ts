import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-character-stat',
	templateUrl: './character-stat.component.html',
	styleUrls: ['./character-stat.component.css']
})
export class CharacterStatComponent {
	@Input() label: string;
	@Input() value: Object;
	@Input() unit: Object;

	constructor() { }

}
