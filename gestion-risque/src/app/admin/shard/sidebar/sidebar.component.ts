import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
   
  toDisplay = false;
  toDisplay1 = true;
  toDisplay2 = false;
  toDisplay3 = true;
  toggleState = false;
  toggleState1 = false;
  condition = false;
  cond = true;
  
  toggleData() {
    this.toDisplay = !this.toDisplay;
    this.toDisplay1 = !this.toDisplay1;
  }
  toggleData1() {
    this.toDisplay2 = !this.toDisplay2;
    this.toDisplay3 = !this.toDisplay3;

  }
}
