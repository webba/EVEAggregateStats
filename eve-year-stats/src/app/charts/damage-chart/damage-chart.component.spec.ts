import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageChartComponent } from './damage-chart.component';

describe('DamageChartComponent', () => {
	let component: DamageChartComponent;
	let fixture: ComponentFixture<DamageChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ DamageChartComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DamageChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
