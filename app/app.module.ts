import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./projects/project-detail.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { ProjectService } from "./projects/project.service";
import { ProjectFilterPipe } from "./projects/project-filter.pipe";
import { NotFoundComponent } from "./notFound/nfound.component";
import { LoginComponent } from "./login/login.component";
import { OptionPublicComponent } from "./options/optionPublic.component";


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path: 'project:id',component: ProjectComponent},
      {path: 'projects',component: ProjectListComponent},
	  {path: '**' ,component: NotFoundComponent},
    ])
  ], 
  declarations: [ 
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectFilterPipe,
	  NotFoundComponent,
    LoginComponent,
    OptionPublicComponent
  ],
  providers: [
      ProjectService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
