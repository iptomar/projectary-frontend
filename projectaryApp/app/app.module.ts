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


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path: 'project',component: ProjectComponent},
      {path: 'projectList',component: ProjectListComponent},
    ])
  ], 
  declarations: [ 
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectFilterPipe
  ],
  providers: [
      ProjectService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
