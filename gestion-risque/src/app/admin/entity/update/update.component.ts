import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { Type } from 'src/app/models/type';
import { User } from 'src/app/models/user';
import { EntityService } from 'src/app/services/entity.service';
import { TypeService } from 'src/app/services/type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  name!: string;
  entity!: Entities;
  type: Type[] = []; 
  user: User[] = [];
  defaultSelect !: string;
  //types = new FormControl('');
  constructor(private route: ActivatedRoute,private router: Router,
    private entityService: EntityService,private _typeService: TypeService,private _userService : UserService) { }
    fetchPosts(): void {
      this._typeService.getType().subscribe(data => this.type = data);
      this._userService.getuser(false).subscribe(data => this.user = data);
    }
  
  ngOnInit() : void {
    this.fetchPosts();
    this.entity = new Entities();

    this.name = this.route.snapshot.params['name'];
    
    this.entityService.getEntityByname(this.name)
      .subscribe(data => {
        console.log(data)
        this.entity = data;
        this.defaultSelect=this.entity.type.name;
      }, error => console.log(error));
  }

  update() {
    this.entityService.updateEmployee(this.name, this.entity)
      .subscribe(data => {
        console.log(data);
        this.entity = new Entities();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.update();    
  }

  gotoList() {
    this.router.navigate(['/home/entity']);
  }

}
