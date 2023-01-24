import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Tiers } from 'src/app/models/tiers';
import { TiersService } from 'src/app/services/tiers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tiers',
  templateUrl: './tiers.component.html',
  styleUrls: ['./tiers.component.scss']
})
export class TiersComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  tier: Tiers[] = [];
  constructor(private _tiersService: TiersService, private http :  HttpClient,private router: Router){}
 
  fetchPosts(): void {
    this._tiersService.getTiers().subscribe(data => this.tier = data)
  } 
  ngOnInit() : void {
    this.fetchPosts();
    
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
  downloadFile( filename: string ){

    const baseUrl = `${environment.apiUrl}/tiers`;
    //const token = 'my JWT';
    //const headers = new HttpHeaders().set('authorization','Bearer '+token);
    this.http.get(baseUrl,{ responseType: 'blob' as 'json'}).subscribe(
        (response: any) =>{
            let dataType = response.type;
            let binaryData = [];
            binaryData.push(response);
            let downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
            if (filename)
                downloadLink.setAttribute('download', filename);
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }
    )
}
  
}

