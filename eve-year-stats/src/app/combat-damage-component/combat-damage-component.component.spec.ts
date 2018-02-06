import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatDamageComponentComponent } from './combat-damage-component.component';

describe('CombatDamageComponentComponent', () => {
	let component: CombatDamageComponentComponent;
	let fixture: ComponentFixture<CombatDamageComponentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CombatDamageComponentComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CombatDamageComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
