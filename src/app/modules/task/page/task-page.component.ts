import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})

export class TaskPageComponent implements OnInit, OnDestroy {

  groups:Array<any> = [];
  listObservables$:Array<Subscription> = [];



  constructor() { }
  
  listUser:Array<{id:string, name:string}> = [
    {
      id:'1',
      name:'Emi'
    },
    {
      id:'2',
      name:'Maria'
    },
    {
      id:'3',
      name:'Pedro'
    }

  ]

  ngOnInit(): void {

    // const observer1$ = interval(1000).subscribe((res) => {
    //   console.log('aquiiiiiiiiiis')
    // })

    // this.listObservables$ = [observer1$];
    
    this.groups = [
      {
        label:'Nuevos',
        color: 'green',
        list: [
          {
            order:'Como instalar Angular',
            items:[
              {
                key:'price',
                value: 100
              },
              {
                key:'time',
                value:200
              },
              {
                key: 'author',
                value: {
                  name:'Leifer Mendez',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'

                }
              }
              
            ]
          },
          {
            order:'Como instalar Node',
            items:[
              {
                key:'price',
                value: 100
              },
              {
                key:'time',
                value:200
              },
              {
                key: 'author',
                value: {
                  name:'Leifer Mendez',
                  avatar: 'https://avatars.githubusercontent.com/u/15802366?v=4'

                }
              }
              
            ]
          }
        ]
      },
      // {
      //   label:'Trabajando',
      //   color: 'green',
      //   list: [
      //     {
      //       order:'Como instalar WEB',
      //       items:[
      //         {
      //           key:'price',
      //           value: 152
      //         },
      //         {
      //           key:'time',
      //           value:152
      //         },
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label:'Revision',
      //   color: 'green',
      //   list: [
      //     {
      //       order:'Como instalar WEB',
      //       items:[
      //         {
      //           key:'price',
      //           value: 152
      //         },
      //         {
      //           key:'time',
      //           value:152
      //         },
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label:'Listo',
      //   color: 'green',
      //   list: [
      //     {
      //       order:'Como instalar WEB',
      //       items:[
      //         {
      //           key:'price',
      //           value: 152
      //         },
      //         {
      //           key:'time',
      //           value:152
      //         },
      //       ]
      //     }
      //   ]
      // },
      // {
      //   label:'Revisado',
      //   color: 'green',
      //   list: [
      //     {
      //       order:'Como instalar WEB',
      //       items:[
      //         {
      //           key:'price',
      //           value: 152
      //         },
      //         {
      //           key:'time',
      //           value:152
      //         },
      //       ]
      //     }
      //   ]
      // }
    ]
  }

  ngOnDestroy(): void {
    console.log('me voy a morir');
    this.listObservables$.forEach((subscriptions)=> subscriptions.unsubscribe)
  }


}
