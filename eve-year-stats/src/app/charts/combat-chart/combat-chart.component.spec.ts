import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatChartComponent } from './combat-chart.component';

describe('CommbatChartComponent', () => {
	let component: CombatChartComponent;
	let fixture: ComponentFixture<CombatChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ CombatChartComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CombatChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
