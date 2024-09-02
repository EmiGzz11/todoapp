
import { Component, OnInit } from '@angular/core';

import { TestCourseService } from 'src/app/shared/services/test-course.service';

@Component({
  selector: 'app-header', //El tag que se usa para llamar a ese componente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: Array<{name:string, router:any}> = [
    {
      name: 'Overview',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Invoices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }
  ]

  constructor(
    public testCourseService:TestCourseService){

  }

  ngOnInit(): void {
  }


}