import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewTaskService } from '../../services/new-task.service';
import { ColumnService } from '../../services/column.service';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit{
  @Input() data:Array<any> = [];
  @Input() name:string = '';

  
  constructor() { }

  ngOnInit(): void {
    // this.columnService.reloadColumn$
    // .subscribe((response: { data: any; }) => {
    //   if(response && response?.data?._id === this.id){
    //     const {data} = response;
    //     this.data = data.list
    //     console.log('--->',response)
    //   }
    // })
  }

  addTask():void{
    // this.newTaskSerivce.setShow(true,this.id)
  }

}