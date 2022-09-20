import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import * as _ from 'lodash'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-show-doctor',
  templateUrl: './show-doctor.component.html',
  styleUrls: ['./show-doctor.component.css']
})
export class ShowDoctorComponent implements OnInit {
  yy =[];
  mySelect = '2';
  name:string ='';
 MainData? :Doctor[] ;
  doctor?: Doctor[];
  selectedValue: any;

  doctorDetails:any;
  doctorName:any;


  constructor(private doctorService : DoctorService,
    private router:Router,private http:HttpClient
    ,  private route:ActivatedRoute) {

      paramSubs :Subscription
     }

  ngOnInit(): void {
    this.MainData =[];

    this.getEmployees();
   
    console.log('vvvvvvvvvvvvvv',this.doctor);
    console.log('ggggggggggggg',this.name)
  }
 

  form = new FormGroup({

    website: new FormControl('', Validators.required)

  });

  

  get f(){

    return this.form.controls;

  }

  

  submit(){

    console.log(this.form.value);

  }

  private getDoctorByName(doctorName:any){
   // this.doctorName=this.route.snapshot.params['doctorName'];
    this.doctorService.getDoctorByName(doctorName).subscribe(data =>{
      this.doctorDetails=data;

      console.log('llll',data);
    });

  }
getTableData(data:any){
  
  this.getDoctorByName(data);
}
  changeWebsite(e:any) {
let data = e.target.value;
this.getTableData(data);

    console.log(e.target.value);

  }



  selectChange() {
    this.selectedValue = this.getDropDownText(this.mySelect ,this.doctor)[0];
    console.log('hh',this.selectedValue)
}
  getDropDownText(id:any, object:any){
    const selObj = _.filter(object, function (o) {
        return (_.includes(id,o.id));
    });
    return selObj;
  }

  private getEmployees(){
    let s;
    this.doctorService.getDoctorList().subscribe((data:any) =>{
     this.doctor = data;
   s = 'dddd';
     
    });
    
    console.log('sam',s);
  }  
}

