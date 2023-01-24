import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;
  username  = this.userService.currentUserValue.name;
  user !: User;
  role =this.userService.currentUserValue.role;
  constructor(private observer : BreakpointObserver,private userService : UserService,private router: Router) { }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close()
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }
  update(){
    this.router.navigate(['/home/updateuser', this.userService.currentUserValue.username]);
  }
  getall(){
    this.router.navigate(['/home/ListUser']);
  }
  Logout(){
    this.userService.logOut().subscribe( data => this.gotoclassList());
  }
  gotoclassList() {
    this.router.navigate(['']);
  }
 }
