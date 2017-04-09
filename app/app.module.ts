import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
//Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./projects/project-detail.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { NotFoundComponent } from "./notFound/nfound.component";
import { LoginComponent } from "./menu/login/login.component";
import { OptionPublicComponent } from "./menu/options/optionPublic.component";
import { ProjectFormComponent} from "./forms/project-form.component";
import { StudentProfileComponent } from "./profiles/student-profile.component";
import { StudentListComponent } from "./profiles/student-list.component";
//Service
import { StudentService } from "./profiles/users.service";
import { ProjectFormService } from "./forms/project-form.service";
import { ProjectService } from "./projects/project.service";
//Pipes
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { StudentFilterPipe } from "./profiles/student-filter.pipe";

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      	{path: '',component: HomeComponent},
      	{path: 'home',component: HomeComponent},
      	{path: 'project/:id',component: ProjectComponent},
      	{path: 'projects',component: ProjectListComponent},
      	{path: 'projectform', component: ProjectFormComponent },
      	{path: 'student/:id', component: StudentProfileComponent},
		{path: 'students', component: StudentListComponent},
	    {path: '**' ,component: NotFoundComponent},
    ])
  ], 
  exports: [ RouterModule ],
  declarations: [ 
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
		ProjectFilterPipe,
		StudentFilterPipe
  ],
  providers: [
		ProjectService,
		StudentService,
      	ProjectFormService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
