import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, EmailValidator } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
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
import { RecoveryComponent } from "./recovery/recovery.component";
import { LoginComponent } from "./menu/login/login.component";
import { ProjectFormComponent} from "./projects/project-form/project-form.component";
import { WhoAmIComponent } from "./users/whoami.component";
import { StudentListComponent } from "./users/student-list.component";
import { ChangePasswordComponent } from "./users/chpass.component";
import { SignUpStudentComponent } from "./signUp/signUp-student.component";
import { GroupJoinComponent } from "./groups/group-join.component";
import { GroupCreateComponent } from "./groups/group-create.component";
import { GroupListComponent } from "./groups/group-list.component";
import { GroupProfileComponent } from "./groups/group-profile.component";
import { ProjectApplicationComponent } from "./projects/project-application/project-application.component";
import { DashboardListUserActiveComponent  } from "./dashboard/dashActUser/dashboard_user_active_list.component";
import { DashboardListUserBlockComponent } from "./dashboard/dashBlckUser/dashboard_user_block_list.component";
import { DashboardProjectListComponent  } from "./dashboard/dashProject/dashboard_project_list.component";
import { DashboardProjectProfileComponent  } from "./dashboard/dashProject/dashboard_project_profile.component";
import { ProjectFinalizeComponent } from "./projects/project-finalize.component";

import { ApplicationListComponent } from "app/applications/application-list.component";
import { ModalComponent } from "./utils/modal.component";
//Service
import { StudentService } from "./users/users.service";
import { ProjectFormService } from "./projects/project-form/project-form.service";
import { ProjectService } from "./projects/project.service";
import { GroupService } from "./groups/group.service";
import { ProjectApplicationService } from "./projects/project-application/project-application.service";
import { SignUpStudentService } from "./signUp/signUp-student.service";
import { DashboardService } from "./dashboard/dashboard.service";
import { LoginService } from "./menu/login/login.service";
import { HomeService } from "./home/home.service";
import { RecoveryService } from "./recovery/recovery.service";
import { ApplicationService } from "app/applications/application.service";
//Pipes
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { StudentFilterPipe } from "./users/student-filter.pipe";
import { AuthGuard } from "./auth.guard";
import { ProjectApplicationFilterPipe } from "./dashboard/dashProject/dashboard_project_list.pipe";
import { GroupFilterPipe } from "./groups/group-filter.pipe"
import { UserProfileEditComponent } from "app/users/profile-edit.component";
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ProfileEditDataComponent } from "app/users/profile-edit-userdata.component";
import { ProfileEditImageComponent } from "app/users/profile-edit-image.component";
import { EqualValidator } from './utils/validators/equal-validator.directive';


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
		{path: 'recovery',component: RecoveryComponent},
		{path: 'contacts',component: ContactsComponent},
		{path: 'project/:id',component: ProjectComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'project/:id/finalize',component: ProjectFinalizeComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] } },
		{path: 'dashboard',component: DashboardListUserActiveComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'dashboardusrblklist',component: DashboardListUserBlockComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'dashboardprojects',component: DashboardProjectListComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'dashboard/project/:id',component: DashboardProjectProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'projects',component: ProjectListComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'projectform', component: ProjectFormComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] } },
		{path: 'projectapplication', component: ProjectApplicationComponent/*, canActivate: [AuthGuard], data: { roles: ['student'] }*/ },
		{path: 'user/profile', component: WhoAmIComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] }},
		{path: 'user/profile/edit', component: UserProfileEditComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'],},
			children: [
			{
				path: 'home',
				component: ProfileEditDataComponent,
				outlet: 'profile-edit'
			},
			{
				path: 'image',
				component: ProfileEditImageComponent,
				outlet: 'profile-edit'
			}
		]},		
		{path: 'user/applications', component: ApplicationListComponent, canActivate: [AuthGuard], data: { roles: ['student'] }},
		{path: 'students', component: StudentListComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'chpass', component: ChangePasswordComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] }},
		{path: 'signup', component: SignUpStudentComponent},
		{path: 'group/create', component: GroupCreateComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/join', component: GroupJoinComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/list', component: GroupListComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: 'group/profile/:id', component: GroupProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher']}},
		{path: '**' ,component: NotFoundComponent}		
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
		RecoveryComponent,
    	ProjectFormComponent,
		ProjectApplicationComponent,
		WhoAmIComponent,
		ApplicationListComponent,
		StudentListComponent,
		SignUpStudentComponent,
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
		UserProfileEditComponent,
		ProjectFinalizeComponent,
		ProfileEditDataComponent,
		ProfileEditImageComponent,
      	//Pipe
		ProjectFilterPipe,
		StudentFilterPipe,
		ProjectApplicationFilterPipe,
		GroupFilterPipe, 
		FileSelectDirective,
		EqualValidator
  ],
  providers: [
	  	AuthGuard,
      	//Service
		ProjectService,
		StudentService,
      	ProjectFormService,
		ProjectApplicationService,
		GroupService,
		RecoveryService,
		LoginService,
		SignUpStudentService,
		DashboardService,
		ApplicationService,
		HomeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
