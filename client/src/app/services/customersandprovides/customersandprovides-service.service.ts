import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { customersandproviders} from '../../models/customersandproviders';

@Injectable({
  providedIn: 'root'
})
export class customersandprovidesServiceService {

  API_URI='http://192.168.137.207:3000';
  constructor(private http:HttpClient) { }
  getcustomersandprovides(){
    return this.http.get(`${this.API_URI}/reports/customersandproviders`);
  }
}