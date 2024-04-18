import { Component } from '@angular/core';
import { scales } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Radar chart for Angular 12';
  options = {
    scales: {
        r: {
          max: 5, 
          min:0,
          ticks: {
            precision: 0,
            // display: false
          }
        }
    }
  };
  
  options_bar = {
    scales: {
        y: {
          max: 40, 
          min:0,
          ticks: {
            precision: 0,
            // display: false
          }
          
        }
    }
  };

 corner = ['CI', 'PA', 'CN', 'TD', 'CT', 'EN'];
 corner_bar = ['CL01','CL02','CL03','CL04']

  data1 = {
    labels: this.corner,
    datasets: [
      {
        label: 'My First dataset',
        borderColor: 'green',
        backgroundColor: 'rgba(144, 238, 144, 0.25)',
        pointerBackgroundColor: 'green',
        pointerBorderColor: 'green',
        pointBorderWidth: 2, 
        pointRadius: 5, 
        data: [4,4,4,4,4,4],
      }
    ],
  }

  data4 = {
    labels: this.corner_bar,
    datasets: [
      {
        label: 'My First dataset',
        data: [30,30,30,30,30,30],
        backgroundColor:'green'
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'gold',
        data: [20,20,20,20,20,20],
      }
    ]
  }
}
