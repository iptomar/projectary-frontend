import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import 'zone.js';
import 'reflect-metadata';
//Component
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactsComponent } from "./home/contacts.component";
import { AboutComponent } from "./home/about.component";
import { ProjectComponent } from "./projects/project-detail.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { NotFoundComponent } from "./notFound/nfound.component";
import { LoginComponent } from "./menu/login/login.component";
import { ProjectFormComponent} from "./projects/project-form/project-form.component";
import { WhoAmIComponent } from "./users/whoami.component";
import { StudentListComponent } from "./users/student-list.component";
import { ChangePasswordComponent } from "./users/chpass.component";
import { SignInStudentComponent } from "./signIn/signIn-student.component";
import { GroupJoinComponent } from "./groups/group-join.component";
import { GroupCreateComponent } from "./groups/group-create.component";
import { GroupListComponent } from "./groups/group-list.component";
import { GroupProfileComponent } from "./groups/group-profile.component";
import { ProjectApplicationComponent } from "./projects/project-application/project-application.component";
import { DashboardListUserActiveComponent  } from "./dashboard/dashActUser/dashboard_user_active_list.component";
import { DashboardListUserBlockComponent } from "./dashboard/dashBlckUser/dashboard_user_block_list.component";
import { DashboardProjectListComponent  } from "./dashboard/dashProject/dashboard_project_list.component";
import { DashboardProjectProfileComponent  } from "./dashboard/dashProject/dashboard_project_profile.component";
//Service
import { StudentService } from "./users/users.service";
import { ProjectFormService } from "./projects/project-form/project-form.service";
import { ProjectService } from "./projects/project.service";
import { GroupService } from "./groups/group.service";
import { ProjectApplicationService } from "./projects/project-application/project-application.service";
import { SignInStudentService } from "./signIn/signIn-student.service";
import { DashboardService } from "./dashboard/dashboard.service";
import { LoginService } from "./menu/login/login.service";
import { HomeService } from "./home/home.service";
//Pipes
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { StudentFilterPipe } from "./users/student-filter.pipe";
import { AuthGuard } from "./auth.guard";
import { ProjectApplicationFilterPipe } from "./dashboard/dashProject/dashboard_project_list.pipe";
import { GroupFilterPipe } from "./groups/group-filter.pipe"
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./utils/modal.component";
import { ApplicationListComponent } from "app/applications/application-list.component";
import { ApplicationService } from "app/applications/application.service";



@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
	CommonModule, 
	RouterModule.forRoot([
		{path: '',component: HomeComponent},
		{path: 'home',component: HomeComponent},
		{path: 'about',component: AboutComponent},
		{path: 'contacts',component: ContactsComponent},
		{path: 'project/:id',component: ProjectComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'dashboard',component: DashboardListUserActiveComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'dashboardusrblklist',component: DashboardListUserBlockComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'dashboardprojects',component: DashboardProjectListComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'dashboard/project/:id',component: DashboardProjectProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'projects',component: ProjectListComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'projectform', component: ProjectFormComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] } },
		{path: 'projectapplication', component: ProjectApplicationComponent/*, canActivate: [AuthGuard], data: { roles: ['student'] }*/ },
		{path: 'user/profile', component: WhoAmIComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] }},
		{path: 'user/applications', component: ApplicationListComponent, canActivate: [AuthGuard], data: { roles: ['student'] }},
		{path: 'students', component: StudentListComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'chpass', component: ChangePasswordComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] }},
		{path: 'signinstudent', component: SignInStudentComponent},
		{path: 'group/create', component: GroupCreateComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/join', component: GroupJoinComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/list', component: GroupListComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'group/profile/:id', component: GroupProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: '**' ,component: NotFoundComponent},
    ])
  ], 
  exports: [ 
	  RouterModule,
	  ],
  declarations: [ 
	    //Component
    	AppComponent,
    	HomeComponent,
		AboutComponent,
		ContactsComponent,
    	ProjectComponent,
    	ProjectListComponent,
		NotFoundComponent,
    	LoginComponent,
    	ProjectFormComponent,
		ProjectApplicationComponent,
		WhoAmIComponent,
		ApplicationListComponent,
		StudentListComponent,
		SignInStudentComponent,
		GroupCreateComponent,
		GroupJoinComponent,
		GroupListComponent,
		GroupProfileComponent,
		DashboardListUserActiveComponent,
		DashboardListUserBlockComponent,
		DashboardProjectListComponent,
		DashboardProjectProfileComponent,
		ChangePasswordComponent,
		ModalComponent,
      	//Pipe
		ProjectFilterPipe,
		StudentFilterPipe,
		ProjectApplicationFilterPipe,
		GroupFilterPipe
  ],
  providers: [
	  	AuthGuard,
      	//Service
		ProjectService,
		StudentService,
      	ProjectFormService,
		ProjectApplicationService,
		GroupService,
		LoginService,
		SignInStudentService,
		DashboardService,
		ApplicationService,
		HomeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
