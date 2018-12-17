import { Component, OnInit } from '@angular/core';
import {DataServiceService}  from '../data-service.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  dataCollection =[]
  constructor(private service:DataServiceService) { }

  ngOnInit() {
    this.dataCollection =  this.service.listOfData
  }

}
