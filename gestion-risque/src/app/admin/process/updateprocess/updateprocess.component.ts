import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { Level } from 'src/app/models/level';
import { Process } from 'src/app/models/process';
import { User } from 'src/app/models/user';
import { EntityService } from 'src/app/services/entity.service';
import { LevelService } from 'src/app/services/level.service';
import { ProcessService } from 'src/app/services/process.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateprocess',
  templateUrl: './updateprocess.component.html',
  styleUrls: ['./updateprocess.component.scss']
})
export class UpdateprocessComponent implements OnInit {

  name!: string;
  process!: Process;
  entity: Entities[] = []; 
  user: User[] =[];
  process1: Process[] = []; 
  level: Level[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private _entityService: EntityService,private processService: ProcessService,private userService: UserService) { }
    fetchPosts(): void {
      this._entityService.getEntity().subscribe(data => this.entity = data);
      this.processService.getprocess().subscribe(data => this.process1 = data);
      this.userService.getuser(false).subscribe(data => this.user = data);
    }
  
  ngOnInit() {
    this.fetchPosts();
    this.process = new Process();

    this.name = this.route.snapshot.params['name'];
    
    this.processService.getProcessByname(this.name)
      .subscribe(data => {
        console.log(data)
        this.process = data;
      }, error => console.log(error));
  }
  getLevel(level : string){
    this.processService.getProcessBylevel(level).subscribe(data => this.process1 = data );
  }
  update() {
    this.processService.updateProcess(this.name, this.process)
      .subscribe(data => {
        console.log(data);
        this.process = new Process();
        this.gotoList();
      }, error => console.log(error));
  }
affichername(){
  return this.process.owner.name;
}
  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/home/process']);
  }
}
