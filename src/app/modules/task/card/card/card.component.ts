import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';

import { interval } from 'rxjs';
import { TestCourseService } from 'src/app/shared/services/test-course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent   {
 @ViewChild('refId') elementRefId:ElementRef = new ElementRef('');
  @Input() idOrder: string | number = 0
  @Input() items: Array<any> = []

  constructor(
    private testCourseService:TestCourseService
    ) { }



  sendData():void{
    this.testCourseService.setData("hola desde card");
  }
}