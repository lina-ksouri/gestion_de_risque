import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Process } from 'src/app/models/process';
import { Risque } from 'src/app/models/risque';
import { CategoryService } from 'src/app/services/category.service';
import { ProcessService } from 'src/app/services/process.service';
import { RiskService } from 'src/app/services/risk.service';

@Component({
  selector: 'app-addrisk',
  templateUrl: './addrisk.component.html',
  styleUrls: ['./addrisk.component.scss']
})
export class AddriskComponent implements OnInit {

  risk: Risque  = new Risque();
  category: Category[] = []; 
  process1: Process[] = []; 
  constructor(private _categoryService: CategoryService,private _processService: ProcessService,private _riskService : RiskService,
    private router: Router,public dialog: MatDialog) { }
  fetchPosts(): void {
    this._categoryService.getCategory().subscribe(data => this.category = data);
    this._processService.getprocess().subscribe(data => this.process1 = data);
  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  calculate(){
    this.risk.risk_brut = this.risk.impact * this.risk.probability;
  }

  addRisk(){
    this._riskService.saveRisk(this.risk).subscribe((response:Risque) => this.gotoclassList());
    
  }
  gotoclassList() {
    this.router.navigate(['/home/risk']);
  }

}
function responseMessage(responseMessage: any) {
  throw new Error('Function not implemented.');
}

