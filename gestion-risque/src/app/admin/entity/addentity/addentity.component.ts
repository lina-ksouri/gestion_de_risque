import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { Type } from 'src/app/models/type';
import { User } from 'src/app/models/user';
import { EntityService } from 'src/app/services/entity.service';
import { TypeService } from 'src/app/services/type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addentity',
  templateUrl: './addentity.component.html',
  styleUrls: ['./addentity.component.scss']
})

export class AddentityComponent implements OnInit {
  @ViewChild('MapSearchField') searchFiled !: ElementRef;

  entity: Entities  = new Entities();
  type: Type[] = []; 
  user : User[] = [];
  
  constructor(private _typeService: TypeService,private router: Router,private _entityService: EntityService,private _userService : UserService) { }
  
  fetchPosts(): void {
    this._typeService.getType().subscribe(data => this.type = data);
    this._userService.getuser(false).subscribe(data => this.user = data);
  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  ngAfterViewInit() : void{
    const searchBox = new google.maps.places.SearchBox(
      this.searchFiled.nativeElement
    )
  }

  addEntity(){
    this._entityService.saveEntity(this.entity).subscribe((response:Entities) => this.gotoclassList());
  }
  gotoclassList() {
    this.router.navigate(['/home/entity']);
  }

}
