import { Component, OnInit, Input } from "@angular/core";
import { ProjectService } from "app/projects/project.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { IGroupProfile } from "app/groups/group";
import { ProjectFinalize, GroupMember } from "app/projects/project";

@Component({
  templateUrl: "./project-finalize.component.html"
})
export class ProjectFinalizeComponent implements OnInit {
  title: string = "Finalizar Projeto";
  group: IGroupProfile;
  form: ProjectFinalize;

  constructor(
    private _service: ProjectService,
    private _route: ActivatedRoute,
    private router: Router,
    private location: Location){
      this.form = new ProjectFinalize();
      this.form.members = [];
    }

  async ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    this.group = await this._service.getGroupAsync(id);
    this.group.team.forEach(element => {
        this.form.members.push({member_id: element.id ,member_grade: 0});
    });
      
  }
  cancel() {
    this.location.back(); 
  }

  submitFinalizeProject(){
    this.form.project_id = +this.group.project.id;
    this.form.group_id = +this.group.id;
    console.log(this.form);
  }


}
