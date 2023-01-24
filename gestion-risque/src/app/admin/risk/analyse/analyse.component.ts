import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScaleType } from '@swimlane/ngx-charts';
import * as Highcharts from 'highcharts';
import { Risque } from 'src/app/models/risque';
import { AnalyseService } from 'src/app/services/analyse.service';
import { RiskService } from 'src/app/services/risk.service';
import { multi } from './data';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {
  risk: Risque[] = [];
  valeur!: string;
  valeur_risk!: number;
  name= '';
  risk1!: any;
  analyse: any;
  list: Array<number> = [];
  listmois: Array<number> = [];
  highcharts  = Highcharts;
  chartOptions : any;
  constructor(private router: Router, private _riskService: RiskService,private route: ActivatedRoute,
    private _analyseServise: AnalyseService) {
    Object.assign(this, { multi });
   }
  
  toDisplay1 = false;
  
  fetchPosts(): void {
    this._riskService.getrisk().subscribe(data => this.risk = data);
    this._analyseServise.getAll().subscribe(data => this.analyse = data);
  }

  ngOnInit(): void {
    this.fetchPosts();

  }

afficherData(){
  
  this._riskService.getRiskByname(this.name).subscribe(data => {
    this.risk1 = data;
    this.valeur_risk = this.risk1.risk_brut;
    if(this.risk1.risk_brut== 25 || this.risk1.risk_brut== 20 ||this.risk1.risk_brut== 16 || this.risk1.risk_brut== 15){
      this.valeur = "High";
    }
    else if(this.risk1.risk_brut== 1 || this.risk1.risk_brut== 2 ||this.risk1.risk_brut==  3 || this.risk1.risk_brut== 4){
      this.valeur = "Low";
    }
    else{
      this.valeur = "Moderate"
    };
    }, error => console.log(error));
    this._analyseServise.getByname(this.name).subscribe(data => {
      this.analyse = data;
      this.list = [];
      this.listmois=[];
      for(let i=0; i<this.analyse.length; i++){
        
         
          this.list.push(this.analyse[i].risk_brut);
          this.listmois.push(this.analyse[i].last_update.slice(5,7));
        
        
        //console.log(data)
      data = [{
        name: this.name,
        data:this.list
     }];
   
   this.chartOptions  =  {   
   chart: {
    type: "spline"
   },
   title: {
    text: "Risk analyse per month"
   },
   xAxis:{
    categories:this.listmois
   },
   yAxis: {          
    title:{
       text:"Risk Brut"
    } 
   },
   series: data
   };
      }
      
     

      
});
  this.toDisplay1=true;
  
}


multi!: any[];
view: any = [1100, 300];

// options
showXAxis: boolean = true;
showYAxis: boolean = true;
gradient: boolean = false;
showLegend: boolean = true;
showXAxisLabel: boolean = true;
yAxisLabel: string = 'Likelihood';
showYAxisLabel: boolean = true;
xAxisLabel: string = 'Severity';

colorScheme = {
  name: 'myScheme',
  selectable: true,
  group: ScaleType.Ordinal,
  domain: ['#5F9805', '#FFD800', '#F1260C', '#AAAAAA']
};

onSelect(event:any) {
  console.log(event);
}

        
}
