import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {
  user: User[] = [];
  user1 : any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private router: Router, private _userService: UserService) { }
  
  ngOnInit() : void {
    this.fetchPosts();
    
  }
  
  update(name: string){
    this.router.navigate(['/home/updateuser', name]);
  }
  fetchPosts(): void {
    this._userService.getuser(false).subscribe(data => this.user = data);
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
  deleteUser(username : string) {

    const user = this.user.find(x => x.username === username);
    Swal.fire({
        
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.user = this.user.filter(x => x.username !== username);
            this._userService.delete(username,true).subscribe(data => {this.user1 = data; console.log(data);});
            
          Swal.fire(
            'Compte supprimé!',
            '',
            'success'
          )
        }
      })
    
    //this._userService.delete(this._userService.currentUserValue.username);
    this._userService.getByname(username)
        .pipe(first())
        .subscribe(
            res => {
                if (username == res.username)
                    this._userService.logOut();
            }
        );
}
}
