import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
// import { AppRoutingModule } from './/app-routing.module';

import { RequestComponent } from './admin-panel/request/request.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewProjectComponent } from './admin-panel/view-project/view-project.component';
import { RequestAcceptComponent } from './admin-panel/request-accept/request-accept.component';
import { FileUploadComponent } from './admin-panel/file-upload/file-upload.component';
import { AvailableUsersComponent } from './admin-panel/available-users/available-users.component';
//import { CreateNewProjectComponent } from './admin-panel/view-project/create-new-project/create-new-project.component';



@NgModule({
  declarations: [
    AppComponent,

    RegisterComponent,

    LoginComponent,

    AdminPanelComponent,

    RequestComponent,

    ViewProjectComponent,

    RequestAcceptComponent,

    FileUploadComponent,

    AvailableUsersComponent,

    //CreateNewProjectComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
        path: 'admin-panel',
        component: AdminPanelComponent,
        children: [
          {
            path: 'request',
            component: RequestComponent

          }, {
            path: 'view-project',
            component: ViewProjectComponent
           

          },
          {
            path: 'request-accept',
            component: RequestAcceptComponent

          },
          {
            path: 'file-upload',
            component: FileUploadComponent

          },
          {
            path: 'available-users',
            component: AvailableUsersComponent

          }
        ]
      },

      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      }

    ])
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
