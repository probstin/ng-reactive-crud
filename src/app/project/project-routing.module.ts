import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectCreateComponent } from "./containers/project-create/project-create.component";
import { ProjectDetailsComponent } from "./containers/project-details/project-details.component";
import { ProjectListComponent } from "./containers/project-list/project-list.component";

const routes: Routes = [
    { path: '', component: ProjectListComponent, pathMatch: 'full' },
    { path: 'create', component: ProjectCreateComponent },
    { path: ':id', component: ProjectDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule { }
