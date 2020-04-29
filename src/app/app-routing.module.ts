import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { FlexComponent } from './flex/flex.component';


const routes: Routes = [
  {
    path:'',component: LoginComponent
  },
  {
    path:'uploadfile',component: UploadfileComponent
  },
  {
    path:'flex',component: FlexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
