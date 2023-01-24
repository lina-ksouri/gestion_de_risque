import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { RiskService } from 'src/app/services/risk.service';
import { TiersService } from 'src/app/services/tiers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {
  taille : any;
  tailleParticipants : any;
  tailleFormateurs : any;
  allrisk: any;
  allcontrol:any;
  liste : Array<string> = [];
  constructor(private riskServise : RiskService,private controlService : ControlService,private tierService:  TiersService) { }

  ngOnInit(): void {
this.allrisk = this.tierService.getTiers().subscribe(data => {
  this.allrisk = data;
  for(let i=0; i<this.allrisk.length; i++){
    this.liste.push(this.allrisk[i].name);
  }
    console.log(this.liste)
    this.taille = this.liste.length;
  }
  );
  
  
this.allcontrol=this.controlService.getAll();
this.tailleFormateurs = this.allcontrol.length;

  }
}
