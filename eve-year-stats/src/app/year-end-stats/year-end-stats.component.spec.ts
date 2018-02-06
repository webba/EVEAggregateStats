import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndStatsComponent } from './year-end-stats.component';

describe('YearEndStatsComponent', () => {
	let component: YearEndStatsComponent;
	let fixture: ComponentFixture<YearEndStatsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ YearEndStatsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(YearEndStatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
