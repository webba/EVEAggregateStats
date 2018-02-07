import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-repair-chart',
	templateUrl: './repair-chart.component.html',
	styleUrls: ['./repair-chart.component.css']
})
export class RepairChartComponent implements OnInit {
	@Input() label: string;
	@Input() data: Object;
	@Input() datapoints: RepairChartDatapoint[];

	private chart: Chart;
	private lastData: Object;

	constructor(private _authService: AuthService) { }

	ngOnInit() { }

	private getDataPoint(key: string): number {
		if (!this.data) {
			return 0;
		} else if (!this.data[key]) {
			return 0;
		}
		return this.data[key];
	}

	public getChart(): void {
		if (!this.chart) {
			const data: number[] = [];
			const labels = [];
			this.datapoints.forEach(element => {
				data.push(this.getDataPoint(element.stat));
				labels.push(element.name);
			});

			this.chart = new Chart(this.label, {
				type: 'doughnut',
				options: {
					responsive: true,
					legend: {
						display: true
					}
				},
				data: {
					labels: labels,
					datasets: [{
						label: 'Shots',
						data: data,
						backgroundColor: [ 'rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)']
					}]
				}
			});
		} else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
			const data: number[] = [];
			this.datapoints.forEach(element => {
				data.push(this.getDataPoint(element.stat));
			});
			this.chart.datasets[0].data = data;
			this.chart.update();
		}
	}
}

export class RepairChartDatapoint {
	public name: string;
	public stat: string;
}
