import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'dataset-upload',
  templateUrl: './dataset-upload.component.html',
  styleUrls: ['./dataset-upload.component.scss']
})
export class DatasetUploadComponent implements OnInit {
  fileToUpload: File | null = null;
  chartData: any;

  constructor(private http: HttpClient, private dataService :  DataService) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/retrieveData').subscribe(data => {
      // this.myList = data;
      this.chartData = [
        {
          data: data,
          label: 'Scattered dataset wellsfargo',
          pointRadius: 10,
        },
      ];
    }
    );
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  uploadDataset() {
    if (this.fileToUpload) {
      const formData = new FormData();
      formData.append('file', this.fileToUpload);
      this.dataService.saveDataset(formData);
  }
}

  loadDataset() {
      this.dataService.retrieveDataset().subscribe((response)=>{
        this.chartData = [
          {
            data: response,
            label: 'Scattered dataset wellsfargo',
            pointRadius: 10,
          },
        ];
      },
      error => {
        console.error(error);
      })

    
  }
}
