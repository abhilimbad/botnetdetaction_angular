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
    // const data={
    //   filedata:this.fileToUpload,
    //   user:"admin"
    // }  
    // console.log(data)
    const ext=this.fileToUpload.name.split(".");
    if(ext[1]=='pcap'){
    const data = new FormData()
    data.append("file",this.fileToUpload)
    data.append("user","admin")
    this.http.post('http://127.0.0.1:5000/upload/',data).subscribe((result)=>{
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
