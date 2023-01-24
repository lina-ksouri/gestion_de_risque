import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExportToCSV } from '@molteni/export-csv';
import { ngxCsv } from 'ngx-csv';
import { Risque } from 'src/app/models/risque';
import { RiskService } from 'src/app/services/risk.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.scss']
})
export class RiskComponent implements OnInit {
  risk: Risque[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private router: Router, private _riskService: RiskService,public dialog: MatDialog) { }
  
  ngOnInit() : void {
    this.fetchPosts();
    
  }
  RiskDetails(name: string){
    this.router.navigate(['/home/Riskdetails', name]);
  }
  updateRisk(name: string){
    this.router.navigate(['/home/updaterisk', name]);
  }
  fetchPosts(): void {
    this._riskService.getrisk().subscribe(data => this.risk = data);
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
  /*export(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      useBom: true,
      headers: ["name", "risk_brut", "last_update"]
    };
   
    new  ngxCsv(this.risk, "risk", options);
  }
  var exporter = new ExportToCSV(); 
  var filename = "risque";
  if(filename){
     
  }
  exporter.exportColumnsToCSV(this.risk, "risque", ["name", "risk_brut", "last_update"]); 
}*/
}
