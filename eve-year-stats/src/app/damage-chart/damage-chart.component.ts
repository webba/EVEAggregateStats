import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-damage-chart',
  templateUrl: './damage-chart.component.html',
  styleUrls: ['./damage-chart.component.css']
})
export class DamageChartComponent implements OnInit {
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
        type: 'horizontalBar',
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
        },
        data: {
          labels: ['Energy', 'Hybrid', 'Missile', 'Projectile', 'Drone', 'Fighter', 'Fighter Bomber', 'Bomb', 'Smart Bomb', 'Super Weapon'],
          datasets: [{
            label: 'Damage dealt',
            backgroundColor: 'rgba(255, 0, 0, 1)',
            data: [
              this.getDataPoint('damage_to_players_energy_amount'),
              this.getDataPoint('damage_to_players_hybrid_amount'),
              this.getDataPoint('damage_to_players_missile_amount'),
              this.getDataPoint('damage_to_players_projectile_amount'),
              this.getDataPoint('damage_to_players_combat_drone_amount'),
              this.getDataPoint('damage_to_players_fighter_drone_amount'),
              this.getDataPoint('damage_to_players_fighter_bomber_amount'),
              this.getDataPoint('damage_to_players_bomb_amount'),
              this.getDataPoint('damage_to_players_smart_bomb_amount'),
              this.getDataPoint('damage_to_players_super_amount')
            ]
          },{
            label: 'Damage',
            backgroundColor: 'rgba(0, 255, 0, 1)',
            data: [
              this.getDataPoint('damage_from_players_energy_amount'),
              this.getDataPoint('damage_from_players_hybrid_amount'),
              this.getDataPoint('damage_from_players_missile_amount'),
              this.getDataPoint('damage_from_players_projectile_amount'),
              this.getDataPoint('damage_from_players_combat_drone_amount'),
              this.getDataPoint('damage_from_players_fighter_drone_amount'),
              this.getDataPoint('damage_from_players_fighter_bomber_amount'),
              this.getDataPoint('damage_from_players_bomb_amount'),
              this.getDataPoint('damage_from_players_smart_bomb_amount'),
              this.getDataPoint('damage_from_players_super_amount')
            ]
          }]
        }
      });
    } else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
      console.log(this.chart.datasets);
      console.log(this.data);
      this.lastData = this.data;
      this.chart.datasets[0].data = [
        this.getDataPoint('damage_to_players_energy_amount'),
        this.getDataPoint('damage_to_players_hybrid_amount'),
        this.getDataPoint('damage_to_players_missile_amount'),
        this.getDataPoint('damage_to_players_projectile_amount'),
        this.getDataPoint('damage_to_players_combat_drone_amount'),
        this.getDataPoint('damage_to_players_fighter_drone_amount'),
        this.getDataPoint('damage_to_players_fighter_bomber_amount'),
        this.getDataPoint('damage_to_players_bomb_amount'),
        this.getDataPoint('damage_to_players_smart_bomb_amount'),
        this.getDataPoint('damage_to_players_super_amount')
      ];
      this.chart.update();
    }
  }

}
