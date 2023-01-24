import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {
user!: User;
name!: string;
  constructor(private route: ActivatedRoute,private router: Router,private usersevice: UserService) { }

  ngOnInit(){
     this.user = new User();

  this.name = this.route.snapshot.params['name'];
  
  this.usersevice.getByname(this.name)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
}

update() {
  this.usersevice.update(this.name, this.user)
    .subscribe(data => {
      console.log(data);
      this.user = new User();
      this.gotoList();
    }, error => console.log(error));
}
onSubmit() {
  this.update();    
}

gotoList() {
  if(this.usersevice.currentUserValue.role == "MANAGER"){
    this.router.navigate(['/home/ListUser']);
}
else{
  this.router.navigate(['/home']);
}
}
}
