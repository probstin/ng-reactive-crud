import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith, tap } from 'rxjs';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  filteredProjects$!: Observable<any[]>;
  filterInput: FormControl = new FormControl('');
  createRoute: string = 'create';
  itemsPerPage: number = 5;
  currentPage: number = 1;
  totalItems: number = 0;

  constructor(private projectsService: ProjectsService) { }

  // =====================
  // lifecycle
  // =====================

  ngOnInit(): void {
    const projects$: Observable<any[]> = this._getProjects();
    const filterText$: Observable<string> = this._getFilterInputChanges();
    this.filteredProjects$ = this._getFilteredProjects(projects$, filterText$);
  }

  // =====================
  // helpers
  // =====================

  private _getProjects(): Observable<any> {
    return this.projectsService.getAllProjects().pipe(tap(projects => this.totalItems = projects.length));
  }

  private _getFilterInputChanges(): Observable<string> {
    return this.filterInput.valueChanges.pipe(startWith(''));
  }

  private _getFilteredProjects(projects$: Observable<any[]>, filterText$: Observable<string>): Observable<any[]> {
    return combineLatest([projects$, filterText$])
      .pipe(map(([projects, filterText]) => {
        return projects.filter(project => project.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
      }));
  }

}