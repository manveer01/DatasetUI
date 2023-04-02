import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  public saveDataset(formData : FormData) {
    const url = '/api/upload';

    const options: Object = { responseType: 'text' };
    this.http.post(url, formData, options)
      .subscribe(
        response => {
          console.log(response);
          alert(response)
        },
        error => {
          console.error(error);
          alert(error)
        }
      );
  }

  public retrieveDataset() : Observable<any>{
   return this.http.get<any[]>('/api/retrieveData');
  }
}
