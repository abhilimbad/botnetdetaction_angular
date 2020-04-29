import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
myData:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    const a=localStorage.getItem('result')
    this.myData=JSON.parse(a)
  }
logout()
{
this.router.navigate([''])
}
}
