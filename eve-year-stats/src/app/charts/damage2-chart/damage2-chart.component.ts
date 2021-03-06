import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../auth/auth.service';

@Component({
	selector: 'app-damage2-chart',
	templateUrl: './damage2-chart.component.html',
	styleUrls: ['./damage2-chart.component.css']
})
export class Damage2ChartComponent implements OnInit {
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
			this.chart = new Chart(this.label, {
				type: 'horizontalBar',
				options: {
					responsive: true,
					scales: {
						xAxes: [{
							stacked: false
						}],
						yAxes: [{
							stacked: false
						}]
					}
				},
				data: {
					labels: [
						'Energy',
						'Hybrid',
						'Missile',
						'Projectile',
						'Drone',
						'Fighter',
						'Fighter Bomber',
						'Bomb',
						'Smart Bomb',
						'Super Weapon',
						'Structure'
					],
					datasets: [{
						label: 'Shots',
						backgroundColor: 'rgba(255, 0, 0, 1)',
						data: [
							this.getDataPoint('damage_to_players_energy_amount'),
							this.getDataPoint('damage_to_players_hybrid_num_shots'),
							this.getDataPoint('damage_to_players_missile_num_shots'),
							this.getDataPoint('damage_to_players_projectile_num_shots'),
							this.getDataPoint('damage_to_players_combat_drone_num_shots'),
							this.getDataPoint('damage_to_players_fighter_drone_num_shots'),
							this.getDataPoint('damage_to_players_fighter_bomber_num_shots'),
							this.getDataPoint('damage_to_players_bomb_num_shots'),
							this.getDataPoint('damage_to_players_smart_bomb_num_shots'),
							this.getDataPoint('damage_to_players_super_num_shots'),
							this.getDataPoint('damage_to_structures_total_num_shots')
						]
					}, {
						label: 'Shots taken',
						backgroundColor: 'rgba(0, 255, 0, 1)',
						data: [
							this.getDataPoint('damage_from_players_energy_num_shots'),
							this.getDataPoint('damage_from_players_hybrid_num_shots'),
							this.getDataPoint('damage_from_players_missile_num_shots'),
							this.getDataPoint('damage_from_players_projectile_num_shots'),
							this.getDataPoint('damage_from_players_combat_drone_num_shots'),
							this.getDataPoint('damage_from_players_fighter_drone_num_shots'),
							this.getDataPoint('damage_from_players_fighter_bomber_num_shots'),
							this.getDataPoint('damage_from_players_bomb_num_shots'),
							this.getDataPoint('damage_from_players_smart_bomb_num_shots'),
							this.getDataPoint('damage_from_players_super_num_shots'),
							this.getDataPoint('damage_from_structures_total_num_shots')
						]
					}]
				}
			});
		} else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
			this.lastData = this.data;
			this.chart.datasets[0].data = [
				this.getDataPoint('damage_to_players_energy_amount'),
				this.getDataPoint('damage_to_players_hybrid_num_shots'),
				this.getDataPoint('damage_to_players_missile_num_shots'),
				this.getDataPoint('damage_to_players_projectile_num_shots'),
				this.getDataPoint('damage_to_players_combat_drone_num_shots'),
				this.getDataPoint('damage_to_players_fighter_drone_num_shots'),
				this.getDataPoint('damage_to_players_fighter_bomber_num_shots'),
				this.getDataPoint('damage_to_players_bomb_num_shots'),
				this.getDataPoint('damage_to_players_smart_bomb_num_shots'),
				this.getDataPoint('damage_to_players_super_num_shots'),
				this.getDataPoint('damage_to_structures_total_num_shots')
			];
			this.chart.datasets[0].data = [
				this.getDataPoint('damage_from_players_energy_num_shots'),
				this.getDataPoint('damage_from_players_hybrid_num_shots'),
				this.getDataPoint('damage_from_players_missile_num_shots'),
				this.getDataPoint('damage_from_players_projectile_num_shots'),
				this.getDataPoint('damage_from_players_combat_drone_num_shots'),
				this.getDataPoint('damage_from_players_fighter_drone_num_shots'),
				this.getDataPoint('damage_from_players_fighter_bomber_num_shots'),
				this.getDataPoint('damage_from_players_bomb_num_shots'),
				this.getDataPoint('damage_from_players_smart_bomb_num_shots'),
				this.getDataPoint('damage_from_players_super_num_shots'),
				this.getDataPoint('damage_from_structures_total_num_shots')
			];
			this.chart.update();
		}
	}

}
