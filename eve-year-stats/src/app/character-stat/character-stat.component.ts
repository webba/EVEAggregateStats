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
	@Input() sumpath: string[];
	@Input() value: Object;
	@Input() unit: string;

	constructor() { }

	public getValue(): number {
		if (typeof this.sumpath !== 'undefined') {
			let aggregate = 0;
			this.sumpath.forEach(path => {
				aggregate += _get(this.value, path, 0);
			});
			return aggregate;
		}
		return _get(this.value, this.path, 0);
	}
}
