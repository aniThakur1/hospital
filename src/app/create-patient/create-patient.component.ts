import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  
  patient: Patient = new Patient();
  constructor(private patientService:PatientService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {

  }
  
  savePatient(){
 //   const subject = new Subject();


    this.patientService.createPatient(this.patient).subscribe((data:any) =>{
      console.log(data);
    //  subject.next(data);
    //  subject.complete();
     
    },
    (error:any) => console.log(error));
    
  }

  
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }

}

