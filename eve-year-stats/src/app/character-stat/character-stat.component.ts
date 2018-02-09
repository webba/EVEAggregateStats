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
	@Input() path2: string;
	@Input() value: Object;
	@Input() unit: string;

	constructor() { }

	public getValue(): number {
		if (typeof this.path2 !== 'undefined') {
			return _get(this.value, this.path, 0) + _get(this.value, this.path2, 0);
		}
		return _get(this.value, this.path, 0);
	}
}
