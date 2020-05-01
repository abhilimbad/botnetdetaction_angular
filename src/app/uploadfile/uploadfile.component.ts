import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  
fileToUpload: File = null
  constructor(private router: Router,private http:HttpClient) { }
  myData:any
  extension='pcap'
  ngOnInit(): void {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const data={
      filedata:this.fileToUpload,
      user:"admin"
    }  
  const exe= this.fileToUpload.name.split('.')
  if(exe[1]==this.extension){
    
    this.http.post('url',data).subscribe((result)=>{
      console.log(result)
      // this.myData=result
      //  localStorage.setItem('result',JSON.stringify(this.myData))
    })
  }
  else{
    window.alert('please upload pcap file')
  }
}
logout()
{
this.router.navigate([''])
}
}