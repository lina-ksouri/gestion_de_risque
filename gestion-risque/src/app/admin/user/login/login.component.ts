import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user: User = new User();
    errorMessage!: string;
  
    constructor(private userService: UserService, private router: Router) { }
  
    ngOnInit() {
      if(this.userService.currentUserValue){
        this.router.navigate(['/login']);
        return;
      }
    }
  
    login(){
      this.userService.login(this.user).subscribe(data => {
        this.router.navigate(['/home']);
      }, err => {
        this.errorMessage = "Username or password is incorrect.";
      });
    }
}
