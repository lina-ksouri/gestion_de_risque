import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Control } from 'src/app/models/control';
import { Risque } from 'src/app/models/risque';
import { User } from 'src/app/models/user';
import { ControlService } from 'src/app/services/control.service';
import { RiskService } from 'src/app/services/risk.service';
import { UserService } from 'src/app/services/user.service';
import { RiskComponent } from '../../risk/risk.component';

@Component({
  selector: 'app-updatecontrol',
  templateUrl: './updatecontrol.component.html',
  styleUrls: ['./updatecontrol.component.scss']
})
export class UpdatecontrolComponent implements OnInit {
  name!: string;
  controll!: Control;
  risque!: Risque;
  risk: Risque[] = []; 
  user: User[] = [];
  options = [1,2,3,4,5]
  option = [0,1,2,3,4,5]
  ngSelect!: number;
  ngSelect1!: number;
  ngSelect2!: number;
  constructor(private route: ActivatedRoute,private _controlService: ControlService,private router: Router,
    private _riskService: RiskService,private _userService: UserService) { }

    fetchPosts(): void {
      //this._controlService.getAll().subscribe(data => this.control = data);
      this._riskService.getrisk().subscribe(data => this.risk = data);
      this._userService.getuser(false).subscribe(data => this.user = data); 
      
    }
    calculate(){
      this.controll.risk.risk_brut = this.controll.risk.impact * this.controll.risk.probability;
      this.controll.risk.risk_net = this.controll.risk.risk_brut * this.controll.risk.niv_maitrise;
    }

  ngOnInit() : void {
    this.fetchPosts();
    this.controll = new Control();

    this.name = this.route.snapshot.params['name'];
    
    this._controlService.getControlByname(this.name)
      .subscribe(data => {
        console.log(data)
        this.controll = data;
      }, error => console.log(error));

      

  }

  update() {
    this._controlService.update(this.name, this.controll)
      .subscribe(data => {
        console.log(data);
        this.controll = new Control();
        this.gotoList();
      }, error => console.log(error));
     
      this._riskService.updateRisk(this.controll.risk.name,this.controll.risk)
      .subscribe(data => {
        console.log(data);
        this.controll.risk = new Risque();
      }, error => console.log(error));
  }
  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/home/control']);
  }

}
