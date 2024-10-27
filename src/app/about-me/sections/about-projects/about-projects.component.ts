import {Component, signal} from '@angular/core';
import {projects} from './projects';
import {AboutProjectItemComponent} from './about-project-item/about-project-item.component';

@Component({
  selector: 'app-about-projects',
  standalone: true,
  imports: [
    AboutProjectItemComponent
  ],
  templateUrl: './about-projects.component.html',
  styleUrl: './about-projects.component.scss'
})
export class AboutProjectsComponent {
  projects = signal(projects);

}
