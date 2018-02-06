import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairChartComponent } from './repair-chart.component';

describe('RepairChartComponent', () => {
	let component: RepairChartComponent;
	let fixture: ComponentFixture<RepairChartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RepairChartComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RepairChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
