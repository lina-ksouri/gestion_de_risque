import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  user: User = new User();
  errorMessage!: string;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(this.userService.currentUserValue){
      this.router.navigate(['/home']);
      return;
    }
  }

  register(){
    
    this.userService.register(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    },err => {
      this.errorMessage = "Username is already exist";
    });
  }
}
