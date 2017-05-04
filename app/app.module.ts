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
import { StudentProfileComponent } from "./profiles/student-profile.component";
import { StudentListComponent } from "./profiles/student-list.component";
import { SignInStudentComponent } from "./signIn/signIn-student.component";
import { SignInTeacherComponent } from "./signIn/signIn-teacher.component";
import { GroupJoinComponent } from "./groups/group-join.component";
import { GroupCreationComponent } from "./groups/group-creation.component";
//Service
import { StudentService } from "./profiles/users.service";
import { ProjectFormService } from "./projects/project-form/project-form.service";
import { ProjectService } from "./projects/project.service";
import { GroupService } from "./groups/group.service";
//Pipes
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { StudentFilterPipe } from "./profiles/student-filter.pipe";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot([
		{path: '',component: HomeComponent},
		{path: 'home',component: HomeComponent},
		{path: 'project/:id',component: ProjectComponent},
		{path: 'projects',component: ProjectListComponent, canActivate: [AuthGuard], data: { roles: ['student','teacher'] } },
		{path: 'projectform', component: ProjectFormComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] } },
		{path: 'student/:id', component: StudentProfileComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'students', component: StudentListComponent, canActivate: [AuthGuard], data: { roles: ['teacher'] }},
		{path: 'signinstudent', component: SignInStudentComponent},
		{path: 'signinteacher', component: SignInTeacherComponent},
		{path: 'group/creation', component: GroupCreationComponent},
		{path: 'group/join', component: GroupJoinComponent},
		{path: '**' ,component: NotFoundComponent},
    ])
  ], 
  exports: [ RouterModule ],
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
		StudentProfileComponent,
		StudentListComponent,
		SignInStudentComponent,
		SignInTeacherComponent,
		GroupCreationComponent,
		GroupJoinComponent,
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
		GroupService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
