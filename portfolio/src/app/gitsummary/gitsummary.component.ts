import { ViewChild, Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chartjs'; 
import {GithubService} from '../github.service';
import {Http} from '@angular/http';
import {usermodel} from '../model/user';

@Component({
  selector: 'app-gitsummary',
  templateUrl: './gitsummary.component.html',
  styleUrls: ['./gitsummary.component.css'],
  providers:[GithubService]
})
export class GitsummaryComponent implements OnInit {
  
  userdata:usermodel;

  constructor(public _http:Http, private _gitservice:GithubService ) { 

  }



  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    
this.getuser();
  }

  getuser()
  {
   
    this._gitservice.getuserdata().subscribe(data=>{
          

      let jsonobj= JSON.parse(data)

      let movielist:usermodel=jsonobj.results;
      this.userdata=movielist;
     // this.results= movielist[1].title+" length"+movielist.length;
      console.log(data);
     
    }

    );
  }

}
