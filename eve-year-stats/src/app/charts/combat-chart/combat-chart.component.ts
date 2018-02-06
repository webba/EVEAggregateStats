import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-combat-chart',
	templateUrl: './combat-chart.component.html',
	styleUrls: ['./combat-chart.component.css']
})
export class CombatChartComponent implements OnInit {
	@Input() label: string;
	@Input() data: Object;

	private chart: Chart;
	private lastData: Object;

	constructor(private _authService: AuthService) { }

	ngOnInit() {
	}

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
			console.log(this.data);
			this.chart = new Chart(this.label, {
				type: 'radar',
				options: {

				},
				data: {
					labels: ['High Sec', 'Low Sec', 'Null Sec', 'Wormholes'],
					datasets: [{
						label: 'Kills',
						background: 'rgba(0, 255, 0, 0.5)',
						borderColor: 'rgba(0, 255, 0, 1)',
						data: [
							this.getDataPoint('kills_high_sec'),
							this.getDataPoint('kills_low_sec'),
							this.getDataPoint('kills_null_sec'),
							this.getDataPoint('kills_wormhole'),
						]
					},
					{
						label: 'Deaths',
						background: 'rgba(255, 0, 0, 0.5)',
						borderColor: 'rgba(255, 0, 0, 1)',
						data: [
							this.getDataPoint('deaths_high_sec'),
							this.getDataPoint('deaths_low_sec'),
							this.getDataPoint('deaths_null_sec'),
							this.getDataPoint('deaths_wormhole'),
						]
					}]
				}
			});
		} else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
			console.log(this.chart.datasets);
			console.log(this.data);
			this.lastData = this.data;
			this.chart.datasets[0].data = [
				this.getDataPoint('kills_high_sec'),
				this.getDataPoint('kills_low_sec'),
				this.getDataPoint('kills_null_sec'),
				this.getDataPoint('kills_wormhole'),
			];
			this.chart.datasets[1].data = [
				this.getDataPoint('deaths_high_sec'),
				this.getDataPoint('deaths_low_sec'),
				this.getDataPoint('deaths_null_sec'),
				this.getDataPoint('deaths_wormholes'),
			];
			this.chart.update();
		}
	}
}
