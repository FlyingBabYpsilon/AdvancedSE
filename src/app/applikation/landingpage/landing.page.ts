import {  Component, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../adapter.services/authentication-service';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss']
})
export class LandingPage {

  slideOpthori ={
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  }
 
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  month = [
    {value: 0, name: 'January'},
    {value: 1, name: 'February'},
    {value: 2, name: 'March'},
    {value: 3, name: 'April'},
    {value: 4, name: 'May'},
    {value: 5, name: 'June'},
    {value: 6, name: 'July'},
    {value: 7, name: 'August'},
    {value: 8, name: 'September'},
    {value: 9, name: 'October'},
    {value: 10, name: 'November'},
    {value: 11, name: 'December'}
  ]

  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  valueBarsChart: any;
  chartData = null;

  constructor( public authService: AuthenticationService, private db: AngularFireDatabase, private toastCtrl: ToastController) { }

  ionViewDidLoad(){
    this.ref = this.db.list('incomeList', ref => ref.orderByChild('incomeDate'));
  
  this.ref.valueChanges().subscribe(result => {
    if(this.chartData){
      this.updateCharts(result);
    }else{
      this.createCharts(result);
    }

  })
  }

  getReportValues(){
    let reportByMonth = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null
    };
  

  for (let income of this.chartData){
    if (reportByMonth[income.month]){
      if(income.incomeAmt >= 0){
        reportByMonth[income.month] -= +income.incomeAmt;
      }
    else{
        reportByMonth[income.month] += -income.incomeAmt;
    }}else{
      reportByMonth[income.month] = -income.incomeAmt;
      }
    }
  return Object.keys(reportByMonth).map(a => reportByMonth[a]);
}

createCharts(data) {
  this.chartData = data;
 
  // Calculate Values for the Chart
  let chartData = this.getReportValues();
 
  // Create the chart
  this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
    type: 'bar',
    data: {
      labels: Object.keys(this.month).map(a => this.month[a].name),
      datasets: [{
        data: chartData,
        backgroundColor: '#32db64'
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' $';
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          ticks: {
            callback: function (value, index, values) {
              return value + '$';
            },
            suggestedMin: 0
          }
        }]
      },
    }
  });
}

updateCharts(data) {
  this.chartData = data;
  let chartData = this.getReportValues();
 
  // Update our dataset
  this.valueBarsChart.data.datasets.forEach((dataset) => {
    dataset.data = chartData
  });
  this.valueBarsChart.update();
}



}