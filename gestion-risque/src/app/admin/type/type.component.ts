import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';
import {MatDialog} from '@angular/material/dialog'
import { Router } from '@angular/router';
import { Class } from 'src/app/models/class';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  type: Type[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  index!: number;
  headElements = ['Name', 'Class', 'Description', 'Active'];
  constructor(private _typeService: TypeService,public router : Router) { }
  typeDetails(name: string){
    this.router.navigate(['typedetails', name]);
  }
  ngOnInit() : void {
    this.fetchPosts();
    
  }

  fetchPosts(): void {
    this._typeService.getType().subscribe(data => this.type = data)
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
 

}

