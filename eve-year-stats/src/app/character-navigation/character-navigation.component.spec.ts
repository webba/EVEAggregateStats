import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNavigationComponent } from './character-navigation.component';

describe('CharacterNavigationComponent', () => {
	let component: CharacterNavigationComponent;
	let fixture: ComponentFixture<CharacterNavigationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CharacterNavigationComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CharacterNavigationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
