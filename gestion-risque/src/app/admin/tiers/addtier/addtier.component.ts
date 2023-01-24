import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tiers } from 'src/app/models/tiers';
import { TiersService } from 'src/app/services/tiers.service';

@Component({
  selector: 'app-addtier',
  templateUrl: './addtier.component.html',
  styleUrls: ['./addtier.component.scss']
})
export class AddtierComponent implements OnInit {
  tier: Tiers = new Tiers();  
  constructor(private _tiersService: TiersService,private router: Router) { }

  ngOnInit(): void {
  }
  
  addTiers(){
    this._tiersService.saveTiers(this.tier).subscribe(data => this.gototierList());
    
  }
  gototierList() {
    this.router.navigate(['/home/tier']);
  }
 
  }





