import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProjectComponent } from "./projects/project-detail.component";
import { ProjectListComponent } from "./projects/project-list.component";
import { NotFoundComponent } from "./notFound/nfound.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'home',component: HomeComponent},
      {path: 'project',component: ProjectComponent},
      {path: 'projectList',component: ProjectListComponent},
      {path: '**' ,component: NotFoundComponent},
    ])
  ], 
  declarations: [ 
    AppComponent,HomeComponent,ProjectComponent,ProjectListComponent,NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
