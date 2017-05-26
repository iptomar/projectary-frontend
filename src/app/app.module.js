"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Component
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var project_detail_component_1 = require("./projects/project-detail.component");
var project_list_component_1 = require("./projects/project-list.component");
var nfound_component_1 = require("./notFound/nfound.component");
var login_component_1 = require("./menu/login/login.component");
var optionPublic_component_1 = require("./menu/options/optionPublic.component");
var project_form_component_1 = require("./projects/project-form/project-form.component");
var student_profile_component_1 = require("./users/student-profile.component");
var student_list_component_1 = require("./users/student-list.component");
var chpass_component_1 = require("./users/chpass.component");
var signIn_student_component_1 = require("./signIn/signIn-student.component");
var signIn_teacher_component_1 = require("./signIn/signIn-teacher.component");
var group_join_component_1 = require("./groups/group-join.component");
var group_create_component_1 = require("./groups/group-create.component");
var group_list_component_1 = require("./groups/group-list.component");
var group_profile_component_1 = require("./groups/group-profile.component");
var project_application_component_1 = require("./projects/project-application/project-application.component");
var dashboard_user_active_list_component_1 = require("./dashboard/dashActUser/dashboard_user_active_list.component");
var dashboard_user_block_list_component_1 = require("./dashboard/dashBlckUser/dashboard_user_block_list.component");
var dashboard_project_list_component_1 = require("./dashboard/dashProject/dashboard_project_list.component");
var dashboard_project_profile_component_1 = require("./dashboard/dashProject/dashboard_project_profile.component");
//Service
var users_service_1 = require("./users/users.service");
var project_form_service_1 = require("./projects/project-form/project-form.service");
var project_service_1 = require("./projects/project.service");
var group_service_1 = require("./groups/group.service");
var project_application_service_1 = require("./projects/project-application/project-application.service");
var signIn_student_service_1 = require("./signIn/signIn-student.service");
var dashboard_service_1 = require("./dashboard/dashboard.service");
var login_service_1 = require("./menu/login/login.service");
//Pipes
var project_filter_pipe_1 = require("./projects/project-filter.pipe");
var student_filter_pipe_1 = require("./users/student-filter.pipe");
var auth_guard_1 = require("./auth.guard");
var dashboard_project_list_pipe_1 = require("./dashboard/dashProject/dashboard_project_list.pipe");
var group_filter_pipe_1 = require("./groups/group-filter.pipe");
var common_1 = require("@angular/common");
var modal_component_1 = require("./utils/modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'project/:id', component: project_detail_component_1.ProjectComponent },
                { path: 'dashboard', component: dashboard_user_active_list_component_1.DashboardListUserActiveComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'], isadmin: [1] } },
                { path: 'dashboardusrblklist', component: dashboard_user_block_list_component_1.DashboardListUserBlockComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'], isadmin: [1] } },
                { path: 'dashboard/projects', component: dashboard_project_list_component_1.DashboardProjectListComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'dashboard/project/:id', component: dashboard_project_profile_component_1.DashboardProjectProfileComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'projects', component: project_list_component_1.ProjectListComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['student', 'teacher'] } },
                { path: 'projectform', component: project_form_component_1.ProjectFormComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'projectapplication', component: project_application_component_1.ProjectApplicationComponent /*, canActivate: [AuthGuard], data: { roles: ['student'] }*/ },
                { path: 'student/:id', component: student_profile_component_1.StudentProfileComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'students', component: student_list_component_1.StudentListComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'chpass', component: chpass_component_1.ChangePasswordComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['student', 'teacher'] } },
                { path: 'signinstudent', component: signIn_student_component_1.SignInStudentComponent },
                { path: 'signinteacher', component: signIn_teacher_component_1.SignInTeacherComponent },
                { path: 'group/create', component: group_create_component_1.GroupCreateComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['student'] } },
                { path: 'group/join', component: group_join_component_1.GroupJoinComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['student'] } },
                { path: 'group/list', component: group_list_component_1.GroupListComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: 'group/profile/:id', component: group_profile_component_1.GroupProfileComponent, canActivate: [auth_guard_1.AuthGuard], data: { roles: ['teacher'] } },
                { path: '**', component: nfound_component_1.NotFoundComponent },
            ])
        ],
        exports: [
            router_1.RouterModule,
        ],
        declarations: [
            //Component
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            project_detail_component_1.ProjectComponent,
            project_list_component_1.ProjectListComponent,
            nfound_component_1.NotFoundComponent,
            login_component_1.LoginComponent,
            optionPublic_component_1.OptionPublicComponent,
            project_form_component_1.ProjectFormComponent,
            project_application_component_1.ProjectApplicationComponent,
            student_profile_component_1.StudentProfileComponent,
            student_list_component_1.StudentListComponent,
            signIn_student_component_1.SignInStudentComponent,
            signIn_teacher_component_1.SignInTeacherComponent,
            group_create_component_1.GroupCreateComponent,
            group_join_component_1.GroupJoinComponent,
            group_list_component_1.GroupListComponent,
            group_profile_component_1.GroupProfileComponent,
            dashboard_user_active_list_component_1.DashboardListUserActiveComponent,
            dashboard_user_block_list_component_1.DashboardListUserBlockComponent,
            dashboard_project_list_component_1.DashboardProjectListComponent,
            dashboard_project_profile_component_1.DashboardProjectProfileComponent,
            chpass_component_1.ChangePasswordComponent,
            modal_component_1.ModalComponent,
            //Pipe
            project_filter_pipe_1.ProjectFilterPipe,
            student_filter_pipe_1.StudentFilterPipe,
            dashboard_project_list_pipe_1.ProjectApplicationFilterPipe,
            group_filter_pipe_1.GroupFilterPipe
        ],
        providers: [
            auth_guard_1.AuthGuard,
            //Service
            project_service_1.ProjectService,
            users_service_1.StudentService,
            project_form_service_1.ProjectFormService,
            project_application_service_1.ProjectApplicationService,
            group_service_1.GroupService,
            login_service_1.LoginService,
            signIn_student_service_1.SignInStudentService,
            dashboard_service_1.DashboardService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map