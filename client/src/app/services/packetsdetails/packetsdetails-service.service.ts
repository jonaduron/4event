import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {packetsdetails} from '../../models/packetsdetails';

@Injectable({
  providedIn: 'root'
})
export class PacketsdetailsServiceService {

  API_URI='http://localhost:3000';
  constructor(private http:HttpClient) { }
  getpacketsdetails(){
    return this.http.get(`${this.API_URI}/reports/packetsdetails`);
  }

  deletePacket(id:String){
   return this.http.delete(`${this.API_URI}/packets/details/${id}`);
  }
}