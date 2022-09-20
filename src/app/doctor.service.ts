import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL ="http://localhost:1001/doctor/get";

  constructor(private http: HttpClient) { }

  createDoctor(doctor:Doctor) : Observable<Object>{
    return this.http.post(`${this.baseURL}`,doctor);

  }

  getDoctorList(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.baseURL}`);
  }

  getDoctorByName(doctorName:any):Observable<Doctor>{
    return this.http.get<Doctor>(`${this.baseURL}/${doctorName}`);
  }
}
