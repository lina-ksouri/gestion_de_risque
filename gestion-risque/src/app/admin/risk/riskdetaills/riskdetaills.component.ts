import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Risque } from 'src/app/models/risque';
import { RiskService } from 'src/app/services/risk.service';

@Component({
  selector: 'app-riskdetaills',
  templateUrl: './riskdetaills.component.html',
  styleUrls: ['./riskdetaills.component.scss']
})
export class RiskdetaillsComponent implements OnInit {

  name! : string;
  risk! : Risque;

  constructor(private route: ActivatedRoute,private router: Router,
    private riskService: RiskService) { }

  ngOnInit() {
    this.risk = new Risque();

    this.name = this.route.snapshot.params['name'];
    
    this.riskService.getRiskByname(this.name).subscribe(data => {
        console.log(data)
        this.risk = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['/home/risk']);
  }

}
