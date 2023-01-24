import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/models/type';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  name! : string;
  type! : Type;

  constructor(private route: ActivatedRoute,private router: Router,
    private typeService: TypeService) { }

  ngOnInit() {
    this.type = new Type();

    this.name = this.route.snapshot.params['name'];
    
    this.typeService.getTypeByname(this.name).subscribe(data => {
        console.log(data)
        this.type = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/type']);
  }

}
