import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/models/class';
import { Type } from 'src/app/models/type';
import { ClassService } from 'src/app/services/class.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.scss']
})
export class AddtypeComponent implements OnInit {

  type: Type = new Type();
  classe: Class[] = []; 
  constructor(private _classService: ClassService,private router: Router,private _typeService: TypeService) { }
  
  fetchPosts(): void {
    this._classService.getClass().subscribe(data => this.classe = data)
  }
  ngOnInit(): void {
    this.fetchPosts();
  }

  addType(){
    this._typeService.saveType(this.type).subscribe((response:Type) => this.gotoclassList());
  }
  gotoclassList() {
    this.router.navigate(['/home/type']);
  }

}
