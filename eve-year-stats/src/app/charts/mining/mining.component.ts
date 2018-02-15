import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'app-mining',
	templateUrl: './mining.component.html',
	styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {
	@Input() label: string;
	@Input() data: Object;

	private chart: Chart;
	private lastData: Object;

	constructor() { }

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
			this.chart = new Chart(this.label, {
				type: 'doughnut',
				options: {
					responsive: true
				},
				data: {
					labels: [
						'Arkonor',
						'Bistot',
						'Crokite',
						'Dark Ochre',
						'Gneiss',
						'Hedbergite',
						'Hemorphite',
						'Jaspet',
						'Kernite',
						'Mercoxit',
						'Omber',
						'Plagioclase',
						'Pyroxeres',
						'Scordite',
						'Spodumain',
						'Veldspar',
						'Ice',
						'Harvestable Cloud'
					],
					datasets: [{
						backgroundColor: [
							'hsla(0, 100%, 50%, 1)',
							'hsla(20, 100%, 50%, 1)',
							'hsla(40, 100%, 50%, 1)',
							'hsla(60, 100%, 50%, 1)',
							'hsla(80, 100%, 50%, 1)',
							'hsla(100, 100%, 50%, 1)',
							'hsla(120, 100%, 50%, 1)',
							'hsla(140, 100%, 50%, 1)',
							'hsla(160, 100%, 50%, 1)',
							'hsla(180, 100%, 50%, 1)',
							'hsla(200, 100%, 50%, 1)',
							'hsla(220, 100%, 50%, 1)',
							'hsla(240, 100%, 50%, 1)',
							'hsla(260, 100%, 50%, 1)',
							'hsla(280, 100%, 50%, 1)',
							'hsla(300, 100%, 50%, 1)',
							'hsla(340, 100%, 50%, 1)',
							'hsla(360, 100%, 50%, 1)'
						],
						borderColor: [
							'hsla(0, 100%, 50%, 1)',
							'hsla(20, 100%, 50%, 1)',
							'hsla(40, 100%, 50%, 1)',
							'hsla(60, 100%, 50%, 1)',
							'hsla(80, 100%, 50%, 1)',
							'hsla(100, 100%, 50%, 1)',
							'hsla(120, 100%, 50%, 1)',
							'hsla(140, 100%, 50%, 1)',
							'hsla(160, 100%, 50%, 1)',
							'hsla(180, 100%, 50%, 1)',
							'hsla(200, 100%, 50%, 1)',
							'hsla(220, 100%, 50%, 1)',
							'hsla(240, 100%, 50%, 1)',
							'hsla(260, 100%, 50%, 1)',
							'hsla(280, 100%, 50%, 1)',
							'hsla(300, 100%, 50%, 1)',
							'hsla(340, 100%, 50%, 1)',
							'hsla(360, 100%, 50%, 1)'
						],
						data: [
							this.getDataPoint('ore_arkonor'),
							this.getDataPoint('ore_bistot'),
							this.getDataPoint('ore_crokite'),
							this.getDataPoint('ore_dark_ochre'),
							this.getDataPoint('ore_gneiss'),
							this.getDataPoint('ore_hedbergite'),
							this.getDataPoint('ore_hemorphite'),
							this.getDataPoint('ore_jaspet'),
							this.getDataPoint('ore_kernite'),
							this.getDataPoint('ore_mercoxit'),
							this.getDataPoint('ore_omber'),
							this.getDataPoint('ore_plagioclase'),
							this.getDataPoint('ore_pyroxeres'),
							this.getDataPoint('ore_scordite'),
							this.getDataPoint('ore_spodumain'),
							this.getDataPoint('ore_veldspar'),
							this.getDataPoint('ore_ice'),
							this.getDataPoint('ore_harvestable_cloud')
						]
					}]
				}
			});
		} else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
			this.lastData = this.data;
			this.chart.datasets[0].data = [
				this.getDataPoint('ore_arkonor'),
				this.getDataPoint('ore_bistot'),
				this.getDataPoint('ore_crokite'),
				this.getDataPoint('ore_dark_ochre'),
				this.getDataPoint('ore_gneiss'),
				this.getDataPoint('ore_hedbergite'),
				this.getDataPoint('ore_hemorphite'),
				this.getDataPoint('ore_jaspet'),
				this.getDataPoint('ore_kernite'),
				this.getDataPoint('ore_mercoxit'),
				this.getDataPoint('ore_omber'),
				this.getDataPoint('ore_plagioclase'),
				this.getDataPoint('ore_pyroxeres'),
				this.getDataPoint('ore_scordite'),
				this.getDataPoint('ore_spodumain'),
				this.getDataPoint('ore_veldspar'),
				this.getDataPoint('ore_ice'),
				this.getDataPoint('ore_harvestable_cloud')
			];
			this.chart.update();
		}
	}
}
