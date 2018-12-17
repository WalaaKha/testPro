import { Component, OnInit } from '@angular/core';
import {DataServiceService}  from '../data-service.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  number = 10

  isActive = true
  dataCollection =[]
  constructor(private service:DataServiceService) {

    console.log("constructor")
   }

  ngOnInit() {
    console.log("oninit fns")

    this.dataCollection =  this.service.listOfData

    console.log(this.service.listOfData)
  }

  btnClick(){
    this.isActive = !this.isActive;
  }
  printValue(e){
    console.log('keyup  event' , e.target.value)
  }

  ctrlMClicked(){
    console.log('user click on ctrl + m ')
  }

}
