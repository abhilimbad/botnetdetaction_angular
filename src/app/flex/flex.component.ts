import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {
myData:any
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('url').subscribe((result)=>{
      this.myData=result;
    })
  }
logout()
{
this.router.navigate([''])
}
}
