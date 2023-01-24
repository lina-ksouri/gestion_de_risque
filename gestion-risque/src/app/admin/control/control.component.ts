import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Control } from 'src/app/models/control';
import { Risque } from 'src/app/models/risque';
import { User } from 'src/app/models/user';
import { ControlService } from 'src/app/services/control.service';
import { RiskService } from 'src/app/services/risk.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  control: Control[] = [];
  controll : Control = new Control;
  risque : Risque = new Risque;
  user : User[] = [];
  risk : Risque[] = [];
  name ='';
  constructor(private route: ActivatedRoute,private _controlService: ControlService,private router: Router,private _riskService: RiskService
    ,private _userService: UserService) { }
  
  controlDetails(name: string){
    this.router.navigate(['/home/controldetails', name]);
  }
  ngOnInit() : void {
    this.fetchPosts();
  }
 
  fetchPosts(): void {
    this._controlService.getAll().subscribe(data => this.control = data);
    this._riskService.getrisk().subscribe(data => this.risk = data);
    this._userService.getuser(false).subscribe(data => this.user = data);
    
  }
  update() {
    this._controlService.updateControl(this.controll).subscribe((response:Control) => console.log(this.controll));
      this._riskService.update(this.controll.risk.name,this.risque).subscribe(data=> {
        console.log(data);
        this.risque = new Risque();
      }, error => console.log(error));
    
  }
  updateControl(name: string){
    this.router.navigate(['/home/updatecontrol', name]);
  }
  onSubmit() {
    this.update();    
  }
  calculate(){
    this.risque.risk_brut = this.risque.impact * this.risque.probability;
    this.risque.risk_net = this.risque.risk_brut * this.risque.niv_maitrise;
  }
}
