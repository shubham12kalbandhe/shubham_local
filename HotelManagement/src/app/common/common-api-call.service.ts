import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
   url = ' http://localhost:3000/';
  constructor(private http : HttpClient) { }


  postApiCall(endPoint : string, formData: any){

    let url = this.url + endPoint;
    return this.http.post(url,formData);

  }
}
