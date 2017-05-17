import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//Component
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./projects/project-detail.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { NotFoundComponent } from "./notFound/nfound.component";
import { LoginComponent } from "./menu/login/login.component";
import { OptionPublicComponent } from "./menu/options/optionPublic.component";
import { ProjectFormComponent} from "./projects/project-form/project-form.component";
import { StudentProfileComponent } from "./users/student-profile.component";
import { StudentListComponent } from "./users/student-list.component";
import { ChangePasswordComponent } from "./users/chpass.component";
import { SignInStudentComponent } from "./signIn/signIn-student.component";
import { SignInTeacherComponent } from "./signIn/signIn-teacher.component";
import { GroupJoinComponent } from "./groups/group-join.component";
import { GroupCreateComponent } from "./groups/group-create.component";
import { GroupListComponent } from "./groups/group-list.component";
import { GroupProfileComponent } from "./groups/group-profile.component";
import { ProjectApplicationComponent } from "./projects/project-application/project-application.component";
import { DashboardListUserActiveComponent  } from "./dashboard/dashActUser/dashboard_user_active_list.component";
import { DashboardListUserBlockComponent } from "./dashboard/dashBlckUser/dashboard_user_block_list.component";
//Service
import { StudentService } from "./users/users.service";
import { ProjectFormService } from "./projects/project-form/project-form.service";
import { ProjectService } from "./projects/project.service";
import { GroupService } from "./groups/group.service";
import { ProjectApplicationService } from "./projects/project-application/project-application.service";
import { SignInStudentService } from "./signIn/signIn-student.service";
import { DashboardService } from "./dashboard/dashboard.service";
//Pipes
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { StudentFilterPipe } from "./users/student-filter.pipe";
import { AuthGuard } from "./auth.guard";
import { LoginService } from "./menu/login/login.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
	CommonModule,  
	RouterModule.forRoot([
		{path: '',component: HomeComponent},
		{path: 'home',component: HomeComponent},
		{path: 'project/:id',component: ProjectComponent},
		{path: 'dashboard',component: DashboardListUserActiveComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'dashboardusrblklist',component: DashboardListUserBlockComponent,canActivate: [AuthGuard], data: { roles: ['teacher'],isadmin:[1] } },
		{path: 'projects',component: ProjectListComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'projectform', component: ProjectFormComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] } },
		{path: 'projectapplication', component: ProjectApplicationComponent/*, canActivate: [AuthGuard], data: { roles: ['student'] }*/ },
		{path: 'student/:id', component: StudentProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'students', component: StudentListComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'chpass', component: ChangePasswordComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] }},
		{path: 'signinstudent', component: SignInStudentComponent},
		{path: 'signinteacher', component: SignInTeacherComponent},
		{path: 'group/create', component: GroupCreateComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/join', component: GroupJoinComponent, canActivate: [AuthGuard], data: { roles: ['student']}},
		{path: 'group/list', component: GroupListComponent, canActivate: [AuthGuard], data: { roles: ['admin']}},
		{path: 'group/profile/:id', component: GroupProfileComponent, canActivate: [AuthGuard], data: { roles: ['admin']}},
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
    	ProjectComponent,
    	ProjectListComponent,
		NotFoundComponent,
    	LoginComponent,
    	OptionPublicComponent,
    	ProjectFormComponent,
		ProjectApplicationComponent,
		StudentProfileComponent,
		StudentListComponent,
		SignInStudentComponent,
		SignInTeacherComponent,
		GroupCreateComponent,
		GroupJoinComponent,
		GroupListComponent,
		GroupProfileComponent,
		DashboardListUserActiveComponent,
		DashboardListUserBlockComponent,
		ChangePasswordComponent,
      	//Pipe
		ProjectFilterPipe,
		StudentFilterPipe
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
		DashboardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
