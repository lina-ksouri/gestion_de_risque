import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entities } from 'src/app/models/entities';
import { EntityService } from 'src/app/services/entity.service';

@Component({
  selector: 'app-detailsentity',
  templateUrl: './detailsentity.component.html',
  styleUrls: ['./detailsentity.component.scss']
})
export class DetailsentityComponent implements OnInit {
  name! : string;
  entity! : Entities;

  constructor(private route: ActivatedRoute,private router: Router,
    private entityService: EntityService) { }

  ngOnInit() {
    this.entity = new Entities();

    this.name = this.route.snapshot.params['name'];
    
    this.entityService.getEntityByname(this.name).subscribe(data => {
        console.log(data)
        this.entity = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/home/entity']);
  }
}
