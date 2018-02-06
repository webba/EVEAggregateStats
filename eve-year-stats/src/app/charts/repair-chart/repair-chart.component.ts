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
  @Input() datapoints: string;

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
      //console.log(this.data);
      var dataset = JSON.parse(this.datapoints)
      var tdata = [];
      var tlabel = [];
      dataset.forEach(element => {
        tdata.push(this.getDataPoint(element.stat));
        tlabel.push(element.name);
      });
      console.log(tdata)
      console.log(tlabel)

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
					datasets: [{
            labels: ["test1","test2"],
						label: 'Shots',
						backgroundColor: 'rgba(255, 0, 0, 1)',
						data: [10,30]
					}]
				}
			});
		} else if (this.lastData !== this.data && typeof this.chart.datasets !== 'undefined') {
			//console.log(this.chart.datasets);
			//console.log(this.data);
			var tdata = [];
      var tlabel = [];
      dataset.forEach(element => {
        tdata.push(this.getDataPoint(element.stat));
        tlabel.push(element.name);
      });
      this.chart.datasets[0].data = [10,30]
			this.chart.update();
		}
	}

}
