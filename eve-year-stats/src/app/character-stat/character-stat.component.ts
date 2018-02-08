import { Component, Input } from '@angular/core';
import { get as _get } from 'lodash';

@Component({
	selector: 'app-character-stat',
	templateUrl: './character-stat.component.html',
	styleUrls: ['./character-stat.component.css']
})
export class CharacterStatComponent {
	@Input() label: string;
	@Input() path: string;
	@Input() value: Object;
	@Input() unit: string;

	constructor() { }

	public getValue(): number {
		return _get(this.value, this.path, 0);
	}
}
