import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html'
})
export class ScatterPlotComponent {

  @Input() chartData : any;
  chartOptions = {
    responsive: true,
  };
}
