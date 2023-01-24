import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from 'src/app/models/class';
import { Tiers } from 'src/app/models/tiers';
import { ClassService } from 'src/app/services/class.service';
import { TiersService } from 'src/app/services/tiers.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  classe: Class = new Class();
  tier: Tiers[] = []; 
  constructor(private _classService: ClassService,private router: Router,private _tiersService: TiersService) { }
  
  fetchPosts(): void {
    this._tiersService.getTiers().subscribe(data => this.tier = data)
  }
  ngOnInit(): void {
    this.fetchPosts();
  }

  addClass(){
    this._classService.saveTiers(this.classe).subscribe((response:Class) => this.gotoclassList());
  }
  gotoclassList() {
    this.router.navigate(['/home/class']);
  }

}
