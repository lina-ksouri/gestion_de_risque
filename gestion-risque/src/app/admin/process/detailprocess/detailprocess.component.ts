import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Process } from 'src/app/models/process';
import { ProcessService } from 'src/app/services/process.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailprocess',
  templateUrl: './detailprocess.component.html',
  styleUrls: ['./detailprocess.component.scss']
})
export class DetailprocessComponent implements OnInit {
  name! : string;
  process1! :Process;

  constructor(private route: ActivatedRoute,private router: Router,
    private processService: ProcessService,private http: HttpClient) { }

  ngOnInit() {
    this.process1 = new Process();
  
    this.name = this.route.snapshot.params['name'];
    
    this.processService.getProcessByname(this.name).subscribe(data => {
        console.log(data)
        this.process1 = data;
      }, error => console.log(error));
    }
    
  list(){
    this.router.navigate(['/home/process']);
  }
  
}
