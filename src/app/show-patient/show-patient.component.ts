import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {

  patientDetails:any;
  patientId:any;
  constructor(private patientService: PatientService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  private getPatientById(patientId:any){
    this.patientId=this.route.snapshot.params['patientId'];
    this.patientService.getPatientById(patientId).subscribe(data =>{
      this.patientDetails=data;

    });
    if(!this.patientDetails)
    this.patientDetails =null;

  }


  getPatientId(e:any){
    this.patientId =e.target.value;
      }
    
    
      getData(){
        console.log(this.patientId);
        this.getPatientById(this.patientId);
    //if(!this.patientDetails)
    //this.patientDetails =[];
        console.log('anirudh',this.patientDetails);
      }
  

  ngOnChanges(){
if(this.patientDetails ===[])
this.patientDetails =undefined;

  }


}