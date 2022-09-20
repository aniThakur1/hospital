import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private doctorService:DoctorService,
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {

  }
  
  saveDoctor(){
 //   const subject = new Subject();


    this.doctorService.createDoctor(this.doctor).subscribe((data:any) =>{
      console.log(data);
    //  subject.next(data);
    //  subject.complete();
     
    },
    (error:any) => console.log(error));
    
  }

  
  onSubmit(){
    console.log(this.doctor);
    this.saveDoctor();
  }

}

