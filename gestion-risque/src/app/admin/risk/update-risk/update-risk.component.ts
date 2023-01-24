import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Process } from 'src/app/models/process';
import { Risque } from 'src/app/models/risque';
import { CategoryService } from 'src/app/services/category.service';
import { ProcessService } from 'src/app/services/process.service';
import { RiskService } from 'src/app/services/risk.service';

@Component({
  selector: 'app-update-risk',
  templateUrl: './update-risk.component.html',
  styleUrls: ['./update-risk.component.scss']
})
export class UpdateRiskComponent implements OnInit {
  name!: string;
  risk!: Risque;
  category: Category[] = []; 
  process1: Process[] = []; 
  constructor(private route: ActivatedRoute,private router: Router,
    private _categoryService: CategoryService,private _processService: ProcessService,private _riskService : RiskService) { }
    fetchPosts(): void {
      
      this._categoryService.getCategory().subscribe(data => this.category = data);
    this._processService.getprocess().subscribe(data => this.process1 = data);
    }
    calculate(){
      this.risk.risk_brut = this.risk.impact * this.risk.probability;
    }
  ngOnInit() {
    this.fetchPosts();
    this.risk = new Risque();

    this.name = this.route.snapshot.params['name'];
    
    this._riskService.getRiskByname(this.name)
      .subscribe(data => {
        console.log(data)
        this.risk = data;
      }, error => console.log(error));
  }

  update() {
    this._riskService.updateRisk(this.name, this.risk)
      .subscribe(data => {
        console.log(data);
        this.risk = new Risque();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/home/risk']);
  }

}
