import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/class';
import { ClassService } from 'src/app/services/class.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];
  classe: Class[] = [];
  constructor(private _classService: ClassService, private http: HttpClient){}
  ngOnInit() : void {
    this.fetchPosts();
    
  }
  fetchPosts(): void {
    this._classService.getClass().subscribe(data => this.classe = data)
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

    const baseUrl = `${environment.apiUrl}/class`;
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
