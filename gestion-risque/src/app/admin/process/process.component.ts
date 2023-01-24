import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { Process } from 'src/app/models/process';
import { EntityService } from 'src/app/services/entity.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  process: Process[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  entity: Entities[] = [];
  constructor(private _entityService: EntityService,private _processService: ProcessService,private router: Router) { }
  processDetails(name: string){
    this.router.navigate(['/home/details', name]);
  }
  ngOnInit() : void {
    this.fetchPosts();
    
  }
  updateprocess(name: string){
    this.router.navigate(['/home/updateprocess', name]);
  }
  fetchPosts(): void {
    this._entityService.getEntity().subscribe(data => this.entity = data);
    this._processService.getprocess().subscribe(data => this.process = data);
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
