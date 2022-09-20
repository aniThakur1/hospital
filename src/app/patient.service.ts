import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL ="http://localhost:1000/patient/get";
  

  

  constructor(private http: HttpClient) { }

  getPatientById(patientId:any):Observable<Patient>{
    return this.http.get<Patient>(`${this.baseURL}/${patientId}`);
  }

  createPatient(patient:Patient) : Observable<Object>{
    return this.http.post(`${this.baseURL}`,patient);

  }
}
