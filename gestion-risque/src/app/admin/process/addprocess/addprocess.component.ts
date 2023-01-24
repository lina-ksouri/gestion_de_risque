import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { Level } from 'src/app/models/level';
import { Process } from 'src/app/models/process';
import { User } from 'src/app/models/user';
import { EntityService } from 'src/app/services/entity.service';
import { ProcessService } from 'src/app/services/process.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.component.html',
  styleUrls: ['./addprocess.component.scss']
})
export class AddprocessComponent implements OnInit {
  process: Process  = new Process();
  entity: Entities[] = []; 
  user: User[] = [];
  process1: Process[] = [];  
  constructor(private _entityService: EntityService,private _processService: ProcessService,private _userService: UserService,
    private router: Router,public dialog: MatDialog) { }
  fetchPosts(): void {
    this._entityService.getEntity().subscribe(data => this.entity = data);
    this._processService.getprocess().subscribe(data => this.process1 = data);
    this._userService.getuser(false).subscribe(data => this.user = data);
  }
  ngOnInit(): void {
    this.fetchPosts();
  }

  addProcess(){
    this._processService.saveProcess(this.process).subscribe((response:Process) => this.gotoclassList());
  }
  getLevel(level : string){
    this._processService.getProcessBylevel(level).subscribe(data => this.process1 = data );
  }
  
  gotoclassList() {
    this.router.navigate(['/home/process']);
  }
  
}

