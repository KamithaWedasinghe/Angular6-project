import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Router } from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterContrctorComponent } from './register-contrctor/register-contrctor.component';
import { AdminComponent } from './admin/admin.component';
import { SupplierComponent } from './supplier/supplier.component';
import { BoqListComponent } from './admin/boq-list/boq-list.component';
import { NewBOQComponent } from './admin/new-boq/new-boq.component';
import { FileUploadModule } from 'ng2-file-upload/file-upload/file-upload.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterContrctorComponent,
    AdminComponent,
    SupplierComponent,
    BoqListComponent,
    NewBOQComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,  

    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'register',
        component: RegisterComponent
      },

      {
        path: 'register-contrctor',
        component: RegisterContrctorComponent
      },

      {
        path: 'admin',
        component: AdminComponent,
        children:[
          {
            path: 'new-boq',
            component: NewBOQComponent
          }

          // {
          //   path: 'boq-list',
          //   component: BoqListComponent
          // }
        ]
      },

      {
        path: 'supplier',
        component: SupplierComponent
      },

      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
