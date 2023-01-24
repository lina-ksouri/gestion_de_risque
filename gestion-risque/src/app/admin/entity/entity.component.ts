import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from 'src/app/models/class';
import { Entities } from 'src/app/models/entities';
import { ClassService } from 'src/app/services/class.service';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  entity: Entities[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  classe: Class[] = [];
  constructor(private _entityService: EntityService,private _classService: ClassService,private router: Router) { }
  entityDetails(name: string){
    this.router.navigate(['/home/entitydetails', name]);
  }
  ngOnInit() : void {
    this.fetchPosts();
    
  }
  updateEntity(name: string){
    this.router.navigate(['/home/update', name]);
  }
  fetchPosts(): void {
    this._entityService.getEntity().subscribe(data => this.entity = data);
    this._classService.getClass().subscribe(data => this.classe = data);
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
